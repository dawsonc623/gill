import GillModelBufferService from "lib/gill/model-buffer-service.type";
import ModelTextureRepository from "lib/gill/model-texture-repository.type";
import GillProgramSource      from "lib/gill/program/source.type";
import GillProgramService     from "lib/gill/program/service.type";
import GillRenderer           from "lib/gill/renderer.type";
import GillRendererFactory    from "lib/gill/renderer/factory.type";
import GillRendererService    from "lib/gill/renderer/service.type";

class StandardGillRendererService implements GillRendererService
{
  constructor(
    private modelTextureRepository  : ModelTextureRepository,
    private gillProgramService      : GillProgramService,
    private gillRendererFactory     : GillRendererFactory
  ) {

  }

  getRenderer(
    webglRenderingContext   : WebGLRenderingContext,
    gillModelBufferService  : GillModelBufferService,
    gillProgramSource       : GillProgramSource
  ): GillRenderer
  {
    let gillProgram   = this.gillProgramService.getProgram(
                          webglRenderingContext,
                          gillProgramSource
                        );

    return  this.gillRendererFactory.construct(
              gillModelBufferService,
              this.modelTextureRepository, //TODO This probably is not right
              gillProgram
            );
  }
}

export default StandardGillRendererService;
