import gillBufferServiceFactory       from "app/gill/buffer/service/factory";

import gillAttributeBufferMapFactory  from "app/gill/attribute-buffer-map/factory";
import gillBufferCache                from "app/gill/buffer-cache";
import gillBufferFactory              from "app/gill/buffer/factory";

const gillBufferService = gillBufferServiceFactory.construct(
                            gillAttributeBufferMapFactory,
                            gillBufferCache,
                            gillBufferFactory
                          );

export default gillBufferService;
