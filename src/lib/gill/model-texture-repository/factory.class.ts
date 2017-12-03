import ModelTextureRepository         from "lib/gill/model-texture-repository.type";
import ModelTextureRepositoryFactory  from "lib/gill/model-texture-repository/factory.type";
import StandardModelTextureRepository from "lib/gill/model-texture-repository.class";
import WebglService                   from "lib/gill/webgl/service.type";

class StandardModelTextureRepositoryFactory implements ModelTextureRepositoryFactory
{
  construct(
    webglService  : WebglService
  ): ModelTextureRepository
  {
    return  new StandardModelTextureRepository(
              webglService
            );
  }
}

export default StandardModelTextureRepositoryFactory;
