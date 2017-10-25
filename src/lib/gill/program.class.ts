import GillAttribute            from "lib/gill/webgl/attribute.type";
import GillAttributeCollection  from "lib/gill/webgl/attribute/collection.type";
import GillProgram              from "lib/gill/program.type";
import GillUniform              from "lib/gill/webgl/uniform.type";
import GillUniformCollection    from "lib/gill/webgl/uniform/collection.type";

class StandardGillProgram implements GillProgram
{
  constructor(
    private webglRenderingContext : WebGLRenderingContext,
    private webglProgram          : WebGLProgram,
    private attributes            : GillAttributeCollection,
    private uniforms              : GillUniformCollection
  ) {

  }

  forEachAttribute(
    action  : (
      attribute : GillAttribute
    ) => void
  ): void
  {
    this.attributes.forEachAttribute(
      action
    );
  }

  forEachUniform(
    action  : (
      attribute : GillUniform
    ) => void
  ): void
  {
    this.uniforms.forEachUniform(
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
