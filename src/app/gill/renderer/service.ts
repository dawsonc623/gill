import gillRendererServiceFactory from "app/gill/renderer/service/factory";

import gillProgramService         from "app/gill/program/service";
import gillRendererFactory        from "app/gill/renderer/factory";

const gillRendererService = gillRendererServiceFactory.construct(
                              gillProgramService,
                              gillRendererFactory
                            );

export default gillRendererService;
