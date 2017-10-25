import GillAttributeBufferMapFactory  from "lib/gill/attribute-buffer-map/factory.type";
import GillBufferCache                from "lib/gill/buffer-cache.type";
import GillBufferFactory              from "lib/gill/buffer/factory.type";
import GillBufferService              from "lib/gill/buffer/service.type";

interface GillBufferServiceFactory
{
  construct(
    gillAttributeBufferMapFactory : GillAttributeBufferMapFactory,
    gillBufferCache               : GillBufferCache,
    gillBufferFactory             : GillBufferFactory
  ): GillBufferService;
}

export default GillBufferServiceFactory;
