import gillModelBufferServiceFactory  from "app/gill/model-buffer-service/factory";

import GillModelBufferService         from "lib/gill/model-buffer-service.type";

import gillBufferService              from "app/gill/buffer/service";

const gillModelBufferService  = gillModelBufferServiceFactory.construct(
                                  gillBufferService
                                );

export default gillModelBufferService;
