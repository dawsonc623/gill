import AttributeCollection  from "lib/gill/program/attribute/collection.type";
import GillProgram          from "lib/gill/program.type";
import GillProgramFactory   from "lib/gill/program/factory.type";
import TextureCollection    from "lib/gill/program/texture/collection.type";
import UniformCollection    from "lib/gill/program/uniform/collection.type";
import StandardGillProgram  from "lib/gill/program.class";

class StandardGillProgramFactory implements GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : AttributeCollection,
    textures              : TextureCollection,
    uniforms              : UniformCollection
  ): GillProgram
  {
    return  new StandardGillProgram(
              webglRenderingContext,
              webglProgram,
              attributes,
              textures,
              uniforms
            );
  }
}

export default StandardGillProgramFactory;
