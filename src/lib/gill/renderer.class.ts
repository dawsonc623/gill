import Model                    from "lib/gill/model.type";
import GillModelBufferService   from "lib/gill/model-buffer-service.type";
import ModelTextureRepository   from "lib/gill/model-texture-repository.type";
import GillProgram              from "lib/gill/program.type";
import GillRenderer             from "lib/gill/renderer.type";

class StandardGillRenderer implements GillRenderer
{
  private webglProgram  : WebGLProgram;

  private webglRenderingContext : WebGLRenderingContext;

  constructor(
    private gillModelBufferService  : GillModelBufferService,
    private modelTextureRepository  : ModelTextureRepository,
    private gillProgram             : GillProgram
  ) {
    this.webglProgram           = gillProgram.getWebglProgram();
    this.webglRenderingContext  = gillProgram.getWebglRenderingContext();

    //TODO Figure this nonsense out

    // Enable depth testing
    // this.webglRenderingContext.enable(
    //   this.webglRenderingContext.DEPTH_TEST
    // );

    // Enable alpha
    this.webglRenderingContext.blendFunc(
      this.webglRenderingContext.SRC_ALPHA,
      this.webglRenderingContext.ONE_MINUS_SRC_ALPHA
    );

    this.webglRenderingContext.enable(
      this.webglRenderingContext.BLEND
    );
  }

  render(
    renderable : Model
  ): void
  {
    this.webglRenderingContext.useProgram(
      this.webglProgram
    );

    // Bind attributes

    this.gillProgram.forEachAttribute((attribute) => {
      const attributeName = attribute.getName(),
            attributeType = attribute.getType();

      this.webglRenderingContext.bindBuffer(
        this.webglRenderingContext.ARRAY_BUFFER,
        this.gillModelBufferService.getModelAttributeBuffer(
          renderable,
          attributeName,
          this.webglRenderingContext
        )
      );

      const attributeData = renderable.getAttributeData(
                              attributeName
                            );

      if (
        attributeData.needsBuffered()
      ) {
        const typedArrayConstructor = attributeType.getTypedArrayConstructor();

        this.webglRenderingContext.bufferData(
          this.webglRenderingContext.ARRAY_BUFFER,
          typedArrayConstructor.from(
            attributeData.getData()
          ),
          attribute.getUsage()
        );

        attributeData.setNeedsBuffered(
          false
        );
      }

      this.webglRenderingContext.vertexAttribPointer(
        attribute.getLocation(),
        attributeType.getUnitSize(),
        attributeType.getDataType(),
        attributeData.normalize(),
        attributeData.getStride(),
        attributeData.getOffset()
      );
    });

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      null
    );

    // Bind textures
    let currentTexture  = 0;

    this.gillProgram.eachTexture((texture) =>
    {
      const name  = texture.getName(),
            type  = texture.getType(),
            unit  = `TEXTURE${currentTexture}`;

      const bindTarget  = texture.getBindTarget(),
            data        = renderable.getTextureData(
                            name
                          ),
            format      = data.getFormat();

      this.webglRenderingContext.activeTexture(
        (<any>this.webglRenderingContext)[unit]
      );

      this.webglRenderingContext.bindTexture(
        bindTarget,
        this.modelTextureRepository.getTexture(
          renderable,
          name,
          this.webglRenderingContext
        )
      );

      if (
        data.needsBuffered()
      ) {
        this.webglRenderingContext.texImage2D(
          texture.getImageTarget(),
          0,
          format,
          format,
          type.getDataType(),
          data.getPixels()
        );

        data.setNeedsBuffered(
          false
        );
      }

      this.webglRenderingContext.uniform1i(
        texture.getLocation(),
        currentTexture
      );

      currentTexture += 1;
    });

    // Bind uniforms

    this.gillProgram.forEachUniform((uniform) => {
      const uniformType  = uniform.getType();

      const size  = uniformType.getUnitSize(),
            type  = uniformType.getDataType() === this.webglRenderingContext.FLOAT ? "f" : "i";

      const uniformFunction = `uniform${size}${type}v`;

      (<any>this.webglRenderingContext)[uniformFunction](
        uniform.getLocation(),
        renderable.getUniformData(
          uniform.getName()
        )
      );
    });

    const modelIndices  = renderable.getIndexData();

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      this.gillModelBufferService.getModelIndexBuffer(
        renderable,
        this.webglRenderingContext
      )
    );

    if (
      modelIndices.needsBuffered()
    ) {
      this.webglRenderingContext.bufferData(
        this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
        Uint16Array.from(
          modelIndices.getData()
        ),
        this.webglRenderingContext.STATIC_DRAW
      );

      modelIndices.setNeedsBuffered(
        false
      );
    }

    // Draw Elements

    this.webglRenderingContext.drawElements(
      this.webglRenderingContext.TRIANGLES,
      modelIndices.indexCount(),
      this.webglRenderingContext.UNSIGNED_SHORT,
      0
    );

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      null
    );

    this.webglRenderingContext.useProgram(
      null
    );
  }
}

export default StandardGillRenderer;
