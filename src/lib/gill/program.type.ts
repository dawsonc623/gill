import Attribute  from "lib/gill/program/attribute.type";
import Texture    from "lib/gill/program/texture.type";
import Uniform    from "lib/gill/program/uniform.type";

interface GillProgram
{
  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void;

  forEachAttribute(
    action  : (
      attribute : Attribute
    ) => void
  ): void;

  forEachUniform(
    action  : (
      attribute : Uniform
    ) => void
  ): void;

  getWebglProgram(): WebGLProgram;

  getWebglRenderingContext(): WebGLRenderingContext;
}

export default GillProgram;
