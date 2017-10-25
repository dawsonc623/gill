import GillBufferCache            from "lib/gill/buffer-cache.type";
import GillBufferCacheFactory     from "lib/gill/buffer-cache/factory.type";
import GillContextModelsMap       from "lib/gill/context-models-map.type";
import GillModelBufferMapFactory  from "lib/gill/model-buffer-map/factory.type";
import StandardGillBufferCache    from "lib/gill/buffer-cache.class";

class StandardGillBufferCacheFactory implements GillBufferCacheFactory
{
  construct(
    gillContextModels         : GillContextModelsMap,
    gillModelBufferMapFactory : GillModelBufferMapFactory
  ): GillBufferCache
  {
    return  new StandardGillBufferCache(
              gillContextModels,
              gillModelBufferMapFactory
            );
  }
}

export default StandardGillBufferCacheFactory;
