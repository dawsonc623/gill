import GillAttributeCollection  from "lib/gill/webgl/attribute/collection.type";
import GillProgram              from "lib/gill/program.type";
import GillUniformCollection    from "lib/gill/webgl/uniform/collection.type";

interface GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : GillAttributeCollection,
    uniforms              : GillUniformCollection
  ): GillProgram;
}

export default GillProgramFactory;
