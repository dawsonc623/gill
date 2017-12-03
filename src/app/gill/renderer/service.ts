import gillRendererServiceFactory from "app/gill/renderer/service/factory";

import modelTextureRepository     from "app/gill/model-texture-repository";
import gillProgramService         from "app/gill/program/service";
import gillRendererFactory        from "app/gill/renderer/factory";

const gillRendererService = gillRendererServiceFactory.construct(
                              modelTextureRepository,
                              gillProgramService,
                              gillRendererFactory
                            );

export default gillRendererService;
