import Texture          from "lib/gill/program/texture.type";
import TextureFactory   from "lib/gill/program/texture/factory.type";
import StandardTexture  from "lib/gill/program/texture.class";
import VariableType     from "lib/gill/program/variable/type.type";

class StandardTextureFactory implements TextureFactory
{
  construct(
    bindTarget  : GLenum,
    imageTarget : GLenum,
    location    : WebGLUniformLocation,
    name        : string,
    type        : VariableType
  ): Texture
  {
    return  new StandardTexture(
              bindTarget,
              imageTarget,
              location,
              name,
              type
            );
  }
}

export default StandardTextureFactory;
