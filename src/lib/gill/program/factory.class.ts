import GillProgram                          from "lib/gill/program.type";
import GillProgramFactory                   from "lib/gill/program/factory.type";
import GillProgramWebglAttributeCollection  from "lib/gill/program/webgl/attribute/collection.type";
import GillProgramWebglUniformCollection    from "lib/gill/program/webgl/uniform/collection.type";
import StandardGillProgram                  from "lib/gill/program.class";

class StandardGillProgramFactory implements GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : GillProgramWebglAttributeCollection,
    uniforms              : GillProgramWebglUniformCollection
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
