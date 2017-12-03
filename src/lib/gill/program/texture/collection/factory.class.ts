import TextureCollection          from "lib/gill/program/texture/collection.type";
import TextureCollectionFactory   from "lib/gill/program/texture/collection/factory.type";
import StandardTextureCollection  from "lib/gill/program/texture/collection.class";

class StandardTextureCollectionFactory implements TextureCollectionFactory
{
  construct(): TextureCollection
  {
    return  new StandardTextureCollection();
  }
}

export default StandardTextureCollectionFactory;
