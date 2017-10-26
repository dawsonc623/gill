import GillModel              from "lib/gill/model.type";
import GillModelBufferService from "lib/gill/model-buffer-service.type";
import GillProgram            from "lib/gill/program.type";
import GillRenderer           from "lib/gill/renderer.type";

class StandardGillRenderer implements GillRenderer
{
  private webglProgram  : WebGLProgram;

  private webglRenderingContext : WebGLRenderingContext;

  constructor(
    private gillModelBufferService  : GillModelBufferService,
    private gillProgram             : GillProgram
  ) {
    this.webglProgram           = gillProgram.getWebglProgram();
    this.webglRenderingContext  = gillProgram.getWebglRenderingContext();
  }

  drawModel(
    model : GillModel
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
          model,
          attributeName,
          this.webglRenderingContext
        )
      );

      const needsBuffered = model.getBufferAttribute(
                              attributeName
                            );

      if (needsBuffered)
      {
        this.webglRenderingContext.bufferData(
          this.webglRenderingContext.ARRAY_BUFFER,
          attributeType.toTypedArray(
            model.getAttributeData(
              attributeName
            )
          ),
          attribute.getUsage()
        );

        model.setBufferAttribute(
          attributeName,
          false
        );
      }

      this.webglRenderingContext.vertexAttribPointer(
        attribute.getLocation(),
        attributeType.getDataSize(),
        attributeType.getDataType(),
        attributeType.getDataIsNormalized(),
        attributeType.getDataStride(),
        attributeType.getDataOffset()
      );
    });

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      null
    );

    // Bind uniforms

    this.gillProgram.forEachUniform((uniform) => {
      const uniformType  = uniform.getType();

      const size  = uniformType.getDataSize(),
            type  = uniformType.getDataType();

      const uniformFunction = `uniform${size}${type}v`;

      (<any>this.webglRenderingContext)[uniformFunction](
        uniform.getLocation(),
        model.getUniformData(
          uniform.getName()
        )
      );
    });

    const modelIndices  = model.getIndexData();

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      this.gillModelBufferService.getModelIndexBuffer(
        model,
        this.webglRenderingContext
      )
    );

    if (
      model.getBufferIndices()
    ) {
      this.webglRenderingContext.bufferData(
        this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
        Uint16Array.from(
          modelIndices
        ),
        this.webglRenderingContext.STATIC_DRAW
      );

      model.setBufferIndices(
        false
      );
    }

    // Draw Elements

    this.webglRenderingContext.drawElements(
      this.webglRenderingContext.TRIANGLES,
      modelIndices.length,
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
