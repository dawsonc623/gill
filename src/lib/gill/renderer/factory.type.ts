import GillModelBufferService from "lib/gill/model-buffer-service.type";
import GillProgram            from "lib/gill/program.type";
import GillRenderer           from "lib/gill/renderer.type";

interface GillRendererFactory
{
  construct(
    gillModelBufferService  : GillModelBufferService,
    gillProgram             : GillProgram
  ): GillRenderer;
}

export default GillRendererFactory;
