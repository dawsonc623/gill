import Texture            from "lib/gill/program/texture.type";
import TextureCollection  from "lib/gill/program/texture/collection.type";

class StandardTextureCollection implements TextureCollection
{
  private textures : Array<Texture>;

  constructor()
  {
    this.textures = new Array<Texture>();
  }

  addTexture(
    texture : Texture
  ): void
  {
    this.textures.push(
      texture
    );
  }

  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void
  {
    for (
      let texture of this.textures
    )
    {
      action(
        texture
      );
    }
  }
}

export default StandardTextureCollection;
