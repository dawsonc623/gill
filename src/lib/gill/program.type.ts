import GillAttribute  from "lib/gill/webgl/attribute.type";
import GillUniform    from "lib/gill/webgl/uniform.type";

interface GillProgram
{
  forEachAttribute(
    action  : (
      attribute : GillAttribute
    ) => void
  ): void;

  forEachUniform(
    action  : (
      attribute : GillUniform
    ) => void
  ): void;

  getWebglProgram(): WebGLProgram;

  getWebglRenderingContext(): WebGLRenderingContext;
}

export default GillProgram;
