import GillWebglAttribute             from "lib/gill/webgl/attribute.type";
import GillWebglAttributeFactory      from "lib/gill/webgl/attribute/factory.type";
import GillWebglAttributeTypeFactory  from "lib/gill/webgl/attribute/type/factory.type";
import GillWebglAttributeTypeMap      from "lib/gill/webgl/attribute/type/map.type";
import GillWebglProgramFactory        from "lib/gill/webgl/program/factory.type";
import GillWebglProgramService        from "lib/gill/webgl/program/service.type";
import GillWebglTypedArrayFactory     from "lib/gill/webgl/typed-array/factory.type";
import GillWebglUniform               from "lib/gill/webgl/uniform.type";
import GillWebglUniformFactory        from "lib/gill/webgl/uniform/factory.type";
import GillWebglUniformTypeFactory    from "lib/gill/webgl/uniform/type/factory.type";
import GillWebglUniformTypeMap        from "lib/gill/webgl/uniform/type/map.type";

class StandardGillWebglProgramService implements GillWebglProgramService
{
  constructor(
    private gillWebglAttributeFactory     : GillWebglAttributeFactory,
    private gillWebglAttributeTypeFactory : GillWebglAttributeTypeFactory,
    private gillWebglAttributeTypeMap     : GillWebglAttributeTypeMap,
    private gillWebglProgramFactory       : GillWebglProgramFactory,
    private gillWebglUniformFactory       : GillWebglUniformFactory,
    private gillWebglUniformTypeFactory   : GillWebglUniformTypeFactory,
    private gillWebglUniformTypeMap       : GillWebglUniformTypeMap
  ) {

  }

  getAttribute(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributeIndex        : number
  ): GillWebglAttribute
  {
    const attributeInfo = webglRenderingContext.getActiveAttrib(
                            webglProgram,
                            attributeIndex
                          );

    const attributeTypeExists = this.gillWebglAttributeTypeMap.hasAttributeType(
                                  attributeInfo.type
                                );

    if (!attributeTypeExists)
    {
      throw new Error(
              `Unknown WebGL variable type '${attributeInfo.type}' ('${attributeInfo.name}')`
            );
    }

    const attributeLocation = webglRenderingContext.getAttribLocation(
                                webglProgram,
                                attributeInfo.name
                              );

    webglRenderingContext.enableVertexAttribArray(
      attributeLocation
    );

    return  this.gillWebglAttributeFactory.construct(
              attributeInfo.name,
              this.gillWebglAttributeTypeMap.getAttributeType(
                attributeInfo.type
              ),
              attributeLocation,
              webglRenderingContext.STATIC_DRAW
            );
  }

  getUniform(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    uniformIndex          : number
  ): GillWebglUniform
  {
    const uniformInfo = webglRenderingContext.getActiveUniform(
                          webglProgram,
                          uniformIndex
                        );

    const uniformTypeExists = this.gillWebglUniformTypeMap.hasUniformType(
      uniformInfo.type
    );

    if (!uniformTypeExists)
    {
      throw new Error(
              `Unknown WebGL variable type '${uniformInfo.type}' ('${uniformInfo.name}')`
            );
    }

    const uniformLocation = webglRenderingContext.getUniformLocation(
                              webglProgram,
                              uniformInfo.name
                            );

    return  this.gillWebglUniformFactory.construct(
              uniformInfo.name,
              this.gillWebglUniformTypeMap.getUniformType(
                uniformInfo.type
              ),
              uniformLocation
            );
  }

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    return  this.gillWebglProgramFactory.construct(
              webglRenderingContext,
              vertexShaderSource,
              fragmentShaderSource
            );
  }

  setAttributeType(
    webglType         : number,
    dataType          : number,
    typedArrayFactory : GillWebglTypedArrayFactory,
    dataSize          : number,
    dataIsNormalized  : GLboolean,
    dataStride        : GLsizei,
    dataOffset        : GLintptr
  ): void
  {
    this.gillWebglAttributeTypeMap.setAttributeType(
      webglType,
      this.gillWebglAttributeTypeFactory.construct(
        dataType,
        typedArrayFactory,
        dataSize,
        dataIsNormalized,
        dataStride,
        dataOffset
      )
    );
  }

  setUniformType(
    webglType : number,
    dataType  : string,
    dataSize  : number
  ): void
  {
    this.gillWebglUniformTypeMap.setUniformType(
      webglType,
      this.gillWebglUniformTypeFactory.construct(
        dataType,
        dataSize
      )
    );
  }
}

export default StandardGillWebglProgramService;
