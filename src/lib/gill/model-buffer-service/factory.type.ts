import GillBufferService      from "lib/gill/buffer/service.type";
import GillModelBufferService from "lib/gill/model-buffer-service.type";

interface GillModelBufferServiceFactory
{
  construct(
    gillBufferService : GillBufferService
  ): GillModelBufferService;
}

export default GillModelBufferServiceFactory;
