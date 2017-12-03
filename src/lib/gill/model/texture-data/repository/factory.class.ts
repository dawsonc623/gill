import TextureDataFactory             from "lib/gill/model/texture-data/factory.type";
import TextureDataRepository          from "lib/gill/model/texture-data/repository.type";
import TextureDataRepositoryFactory   from "lib/gill/model/texture-data/repository/factory.type";
import StandardTextureDataRepository  from "lib/gill/model/texture-data/repository.class";

class StandardTextureDataRepositoryFactory implements TextureDataRepositoryFactory
{
  construct(
    textureDataFactory  : TextureDataFactory
  ): TextureDataRepository
  {
    return  new StandardTextureDataRepository(
              textureDataFactory
            );
  }
}

export default StandardTextureDataRepositoryFactory;
