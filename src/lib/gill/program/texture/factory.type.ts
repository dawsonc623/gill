import Texture      from "lib/gill/program/texture.type";
import VariableType from "lib/gill/program/variable/type.type";

interface TextureFactory
{
  construct(
    bindTarget  : GLenum,
    imageTarget : GLenum,
    location    : WebGLUniformLocation,
    name        : string,
    type        : VariableType
  ): Texture;
}

export default TextureFactory;
