import GillProgram                          from "lib/gill/program.type";
import GillProgramWebglAttributeCollection  from "lib/gill/program/webgl/attribute/collection.type";
import GillProgramWebglUniformCollection    from "lib/gill/program/webgl/uniform/collection.type";

interface GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : GillProgramWebglAttributeCollection,
    uniforms              : GillProgramWebglUniformCollection
  ): GillProgram;
}

export default GillProgramFactory;
