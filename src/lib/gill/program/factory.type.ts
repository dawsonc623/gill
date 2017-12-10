import AttributeCollection  from "lib/gill/program/attribute/collection.type";
import GillProgram          from "lib/gill/program.type";
import TextureCollection    from "lib/gill/program/texture/collection.type";
import UniformCollection    from "lib/gill/program/uniform/collection.type";

interface GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : AttributeCollection,
    textures              : TextureCollection,
    uniforms              : UniformCollection
  ): GillProgram;
}

export default GillProgramFactory;
