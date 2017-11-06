import GillProgram                          from "lib/gill/program.type";
import GillProgramWebglAttribute            from "lib/gill/program/webgl/attribute.type";
import GillProgramWebglAttributeCollection  from "lib/gill/program/webgl/attribute/collection.type";
import GillProgramWebglUniform              from "lib/gill/program/webgl/uniform.type";
import GillProgramUniformCollection         from "lib/gill/program/webgl/uniform/collection.type";

class StandardGillProgram implements GillProgram
{
  constructor(
    private webglRenderingContext : WebGLRenderingContext,
    private webglProgram          : WebGLProgram,
    private attributes            : GillProgramWebglAttributeCollection,
    private uniforms              : GillProgramUniformCollection
  ) {

  }

  forEachAttribute(
    action  : (
      attribute : GillProgramWebglAttribute
    ) => void
  ): void
  {
    this.attributes.eachAttribute(
      action
    );
  }

  forEachUniform(
    action  : (
      attribute : GillProgramWebglUniform
    ) => void
  ): void
  {
    this.uniforms.eachUniform(
      action
    );
  }

  getWebglProgram(): WebGLProgram
  {
    return  this.webglProgram;
  }

  getWebglRenderingContext(): WebGLRenderingContext
  {
    return  this.webglRenderingContext;
  }
}

export default StandardGillProgram;
