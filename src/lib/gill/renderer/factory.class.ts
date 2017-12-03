import GillModelBufferService from "lib/gill/model-buffer-service.type";
import ModelTextureRepository from "lib/gill/model-texture-repository.type";
import GillProgram            from "lib/gill/program.type";
import GillRenderer           from "lib/gill/renderer.type";
import GillRendererFactory    from "lib/gill/renderer/factory.type";
import StandardGillRenderer   from "lib/gill/renderer.class";

class StandardGillRendererFactory implements GillRendererFactory
{
  construct(
    gillModelBufferService  : GillModelBufferService,
    modelTextureRepository  : ModelTextureRepository,
    gillProgram             : GillProgram
  ): GillRenderer
  {
    return  new StandardGillRenderer(
              gillModelBufferService,
              modelTextureRepository,
              gillProgram
            );
  }
}

export default StandardGillRendererFactory;
