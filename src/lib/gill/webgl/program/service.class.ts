import GillWebglAttribute             from "lib/gill/webgl/attribute.type";
import GillWebglAttributeFactory      from "lib/gill/webgl/attribute/factory.type";
import GillWebglAttributeTypeFactory  from "lib/gill/webgl/attribute/type/factory.type";
import GillWebglAttributeTypeMap      from "lib/gill/webgl/attribute/type/map.type";
import GillWebglProgramFactory        from "lib/gill/webgl/program/factory.type";
import GillWebglProgramService        from "lib/gill/webgl/program/service.type";
import GillWebglUniform               from "lib/gill/webgl/uniform.type";
import GillWebglUniformFactory        from "lib/gill/webgl/uniform/factory.type";
import GillWebglVariableTypeMap       from "lib/gill/webgl/variable/type-map.type";

class StandardGillWebglProgramService implements GillWebglProgramService
{
  constructor(
    private gillWebglAttributeFactory     : GillWebglAttributeFactory,
    private gillWebglAttributeTypeMap     : GillWebglAttributeTypeMap,
    private gillWebglProgramFactory       : GillWebglProgramFactory,
    private gillWebglUniformFactory       : GillWebglUniformFactory,
    private gillWebglVariableTypeMap      : GillWebglVariableTypeMap
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

    const uniformTypeExists = this.gillWebglVariableTypeMap.hasWebglVariableType(
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
              this.gillWebglVariableTypeMap.getWebglVariableType(
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
}

export default StandardGillWebglProgramService;
