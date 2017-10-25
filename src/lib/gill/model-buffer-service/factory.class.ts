import GillBufferService              from "lib/gill/buffer/service.type";
import GillModelBufferService         from "lib/gill/model-buffer-service.type";
import GillModelBufferServiceFactory  from "lib/gill/model-buffer-service/factory.type";
import StandardGillModelBufferService from "lib/gill/model-buffer-service.class";

class StandardGillModelBufferServiceFactory implements GillModelBufferServiceFactory
{
  construct(
    gillBufferService : GillBufferService
  ): GillModelBufferService
  {
    return  new StandardGillModelBufferService(
              gillBufferService
            );
  }
}

export default StandardGillModelBufferServiceFactory;
