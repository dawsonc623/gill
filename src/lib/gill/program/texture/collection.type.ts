import Texture  from "lib/gill/program/texture.type";

interface TextureCollection
{
  addTexture(
    texture : Texture
  ): void;

  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void;
}

export default TextureCollection;
