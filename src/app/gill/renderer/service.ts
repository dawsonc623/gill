import GillRendererService        from "lib/gill/renderer/service.type";

import modelTextureRepository     from "app/gill/model-texture-repository";
import gillProgramService         from "app/gill/program/service";
import gillRendererFactory        from "app/gill/renderer/factory";
import gillRendererServiceFactory from "app/gill/renderer/service/factory";

const gillRendererService = gillRendererServiceFactory.construct(
                              modelTextureRepository,
                              gillProgramService,
                              gillRendererFactory
                            );

export default gillRendererService;
