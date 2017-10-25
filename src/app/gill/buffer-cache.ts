import GillBufferCacheFactory from "app/gill/buffer-cache/factory";

import gillContextModelsFactory   from "app/gill/context-models-map/factory";
import gillModelBufferMapFactory  from "app/gill/model-buffer-map/factory";

const GillBufferCache = GillBufferCacheFactory.construct(
                          gillContextModelsFactory.construct(),
                          gillModelBufferMapFactory
                        );

export default GillBufferCache;
