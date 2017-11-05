import GillWebglTypedArrayFactory           from "lib/gill/webgl/typed-array/factory.type";
import GillWebglAttribute                   from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection         from "lib/gill/webgl/attribute/collection.type";
import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglProgramService              from "lib/gill/webgl/program/service.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglUniform                     from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection           from "lib/gill/webgl/uniform/collection.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";

class StandardGillWebglService implements GillWebglService
{
  constructor(
    private gillWebglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    private gillWebglProgramService             : GillWebglProgramService,
    private gillWebglUniformCollectionFactory   : GillWebglUniformCollectionFactory,
  ) {

  }

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillWebglAttributeCollection
  {

    const attributeCount  = webglRenderingContext.getProgramParameter(
                              webglProgram,
                              webglRenderingContext.ACTIVE_ATTRIBUTES
                            );

    const attributes  = this.gillWebglAttributeCollectionFactory.construct();

    for (let index = 0; index < attributeCount; index += 1)
    {
      attributes.addAttribute(
        this.gillWebglProgramService.getAttribute(
          webglRenderingContext,
          webglProgram,
          index
        )
      );
    }

    return  attributes;
  }

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillWebglUniformCollection
  {
    const uniformCount  = webglRenderingContext.getProgramParameter(
                            webglProgram,
                            webglRenderingContext.ACTIVE_UNIFORMS
                          );

    const uniforms  = this.gillWebglUniformCollectionFactory.construct();

    for (let index = 0; index < uniformCount; index += 1)
    {
      uniforms.addUniform(
        this.gillWebglProgramService.getUniform(
          webglRenderingContext,
          webglProgram,
          index
        )
      );
    }

    return  uniforms;
  }

  getWebglContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext
  {
    let webglRenderingContext = canvas.getContext(
                                  "webgl"
                                );

    if (webglRenderingContext === null)
    {
      webglRenderingContext = canvas.getContext(
                                "experimental-webgl"
                              );
    }

    return  webglRenderingContext;
  }

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    return  this.gillWebglProgramService.getWebglProgram(
              webglRenderingContext,
              vertexShaderSource,
              fragmentShaderSource
            );
  }

  setAttributeType(
    webglType                   : number,
    dataType                    : number,
    gillWebglTypedArrayFactory  : GillWebglTypedArrayFactory,
    dataSize                    : number,
    dataIsNormalized            : GLboolean,
    dataStride                  : GLsizei,
    dataOffset                  : GLintptr
  ): void
  {
    this.gillWebglProgramService.setAttributeType(
      webglType,
      dataType,
      gillWebglTypedArrayFactory,
      dataSize,
      dataIsNormalized,
      dataStride,
      dataOffset
    );
  }

  setUniformType(
    webglType : number,
    dataType  : string,
    dataSize  : number
  ): void
  {
    this.gillWebglProgramService.setUniformType(
      webglType,
      dataType,
      dataSize
    );
  }
}

export default StandardGillWebglService;
