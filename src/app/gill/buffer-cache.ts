import GillBufferCacheFactory     from "app/gill/buffer-cache/factory";

import GillBufferCache            from "lib/gill/buffer-cache.type";

import gillContextModelsFactory   from "app/gill/context-models-map/factory";
import gillModelBufferMapFactory  from "app/gill/model-buffer-map/factory";

const gillBufferCache = GillBufferCacheFactory.construct(
                          gillContextModelsFactory.construct(),
                          gillModelBufferMapFactory
                        );

export default gillBufferCache;
