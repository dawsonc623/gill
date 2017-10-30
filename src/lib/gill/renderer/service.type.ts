import GillModelBufferService from "lib/gill/model-buffer-service.type";
import GillProgramSource      from "lib/gill/program/source.type";
import GillRenderer           from "lib/gill/renderer.type";

interface GillRendererService
{
  getRenderer(
    webglRenderingContext   : WebGLRenderingContext,
    gillModelBufferService  : GillModelBufferService,
    gillProgramSource       : GillProgramSource
  ): GillRenderer;
}

export default GillRendererService;
