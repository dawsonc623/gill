import ModelTextureRepository from "lib/gill/model-texture-repository.type";
import WebglService           from "lib/gill/webgl/service.type";

interface ModelTextureRepositoryFactory
{
  construct(
    webglService  : WebglService
  ): ModelTextureRepository;
}

export default ModelTextureRepositoryFactory;
