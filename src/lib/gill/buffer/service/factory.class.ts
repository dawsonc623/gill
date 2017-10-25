import GillAttributeBufferMapFactory  from "lib/gill/attribute-buffer-map/factory.type";
import GillBufferCache                from "lib/gill/buffer-cache.type";
import GillBufferFactory              from "lib/gill/buffer/factory.type";
import GillBufferService              from "lib/gill/buffer/service.type";
import GillBufferServiceFactory       from "lib/gill/buffer/service/factory.type";
import StandardGillBufferService      from "lib/gill/buffer/service.class";

class StandardGillBufferServiceFactory implements GillBufferServiceFactory
{
  construct(
    gillAttributeBufferMapFactory : GillAttributeBufferMapFactory,
    gillBufferCache               : GillBufferCache,
    gillBufferFactory             : GillBufferFactory
  ): GillBufferService
  {
    return  new StandardGillBufferService(
              gillAttributeBufferMapFactory,
              gillBufferCache,
              gillBufferFactory
            );
  }
}

export default StandardGillBufferServiceFactory;
