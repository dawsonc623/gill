import GillProgram                          from "lib/gill/program.type";
import GillProgramWebglAttributeCollection  from "lib/gill/program/attribute/collection.type";
import TextureCollection                    from "lib/gill/program/texture/collection.type";
import GillProgramWebglUniformCollection    from "lib/gill/program/uniform/collection.type";

interface GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : GillProgramWebglAttributeCollection,
    textures              : TextureCollection,
    uniforms              : GillProgramWebglUniformCollection
  ): GillProgram;
}

export default GillProgramFactory;
