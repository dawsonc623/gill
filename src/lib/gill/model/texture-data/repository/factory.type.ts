import TextureDataFactory     from "lib/gill/model/texture-data/factory.type";
import TextureDataRepository  from "lib/gill/model/texture-data/repository.type";

interface TextureDataRepositoryFactory
{
  construct(
    textureDataFactory  : TextureDataFactory
  ): TextureDataRepository;
}

export default TextureDataRepositoryFactory;
