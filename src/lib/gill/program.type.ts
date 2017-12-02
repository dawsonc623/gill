import GillProgramWebglAttribute  from "lib/gill/program/attribute.type";
import GillProgramWebglUniform    from "lib/gill/program/uniform.type";

interface GillProgram
{
  forEachAttribute(
    action  : (
      attribute : GillProgramWebglAttribute
    ) => void
  ): void;

  forEachUniform(
    action  : (
      attribute : GillProgramWebglUniform
    ) => void
  ): void;

  getWebglProgram(): WebGLProgram;

  getWebglRenderingContext(): WebGLRenderingContext;
}

export default GillProgram;
