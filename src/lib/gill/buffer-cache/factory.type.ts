import GillBufferCacheFactory     from "lib/gill/buffer-cache.type";
import GillContextModelsMap       from "lib/gill/context-models-map.type";
import GillModelBufferMapFactory  from "lib/gill/model-buffer-map/factory.type";

interface GillBufferCacheFactoryFactory
{
  construct(
    gillContextModels         : GillContextModelsMap,
    gillModelBufferMapFactory : GillModelBufferMapFactory
  ): GillBufferCacheFactory;
}

export default GillBufferCacheFactoryFactory;
