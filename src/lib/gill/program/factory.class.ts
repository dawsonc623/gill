import GillAttributeCollection  from "lib/gill/webgl/attribute/collection.type";
import GillProgram              from "lib/gill/program.type";
import GillProgramFactory       from "lib/gill/program/factory.type";
import StandardGillProgram      from "lib/gill/program.class";
import GillUniformCollection    from "lib/gill/webgl/uniform/collection.type";

class StandardGillProgramFactory implements GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : GillAttributeCollection,
    uniforms              : GillUniformCollection
  ): GillProgram
  {
    return  new StandardGillProgram(
              webglRenderingContext,
              webglProgram,
              attributes,
              uniforms
            );
  }
}

export default StandardGillProgramFactory;
