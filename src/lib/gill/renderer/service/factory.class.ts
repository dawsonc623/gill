import GillProgramService           from "lib/gill/program/service.type";
import GillRendererFactory          from "lib/gill/renderer/factory.type";
import GillRendererService          from "lib/gill/renderer/service.type";
import GillRendererServiceFactory   from "lib/gill/renderer/service/factory.type";
import StandardGillRendererService  from "lib/gill/renderer/service.class";

class StandardGillRendererServiceFactory implements GillRendererServiceFactory
{
  construct(
    gillProgramService  : GillProgramService,
    gillRendererFactory : GillRendererFactory
  ): GillRendererService
  {
    return  new StandardGillRendererService(
              gillProgramService,
              gillRendererFactory
            );
  }
}

export default StandardGillRendererServiceFactory;
