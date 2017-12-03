import GillModelBufferService from "lib/gill/model-buffer-service.type";
import ModelTextureRepository from "lib/gill/model-texture-repository.type";
import GillProgram            from "lib/gill/program.type";
import GillRenderer           from "lib/gill/renderer.type";

interface GillRendererFactory
{
  construct(
    gillModelBufferService  : GillModelBufferService,
    modelTextureRepository  : ModelTextureRepository,
    gillProgram             : GillProgram
  ): GillRenderer;
}

export default GillRendererFactory;
