import ModelTextureRepository from "lib/gill/model-texture-repository.type";
import GillProgramService     from "lib/gill/program/service.type";
import GillRendererFactory    from "lib/gill/renderer/factory.type";
import GillRendererService    from "lib/gill/renderer/service.type";

interface GillRendererServiceFactory
{
  construct(
    modelTextureRepository  : ModelTextureRepository,
    gillProgramService      : GillProgramService,
    gillRendererFactory     : GillRendererFactory
  ): GillRendererService;
}

export default GillRendererServiceFactory;
