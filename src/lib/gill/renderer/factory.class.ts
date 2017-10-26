import GillModelBufferService from "lib/gill/model-buffer-service.type";
import GillProgram            from "lib/gill/program.type";
import GillRenderer           from "lib/gill/renderer.type";
import GillRendererFactory    from "lib/gill/renderer/factory.type";
import StandardGillRenderer   from "lib/gill/renderer.class";

class StandardGillRendererFactory implements GillRendererFactory
{
  construct(
    gillModelBufferService  : GillModelBufferService,
    gillProgram             : GillProgram
  ): GillRenderer
  {
    return  new StandardGillRenderer(
              gillModelBufferService,
              gillProgram
            );
  }
}

export default StandardGillRendererFactory;
