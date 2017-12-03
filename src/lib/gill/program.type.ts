import GillProgramWebglAttribute  from "lib/gill/program/attribute.type";
import Texture                    from "lib/gill/program/texture.type";
import GillProgramWebglUniform    from "lib/gill/program/uniform.type";

interface GillProgram
{
  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void;

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
