import GillProgramCache           from "lib/gill/program/cache.type";
import GillProgramFactory         from "lib/gill/program/factory.type";
import GillProgramService         from "lib/gill/program/service.type";
import GillProgramServiceFactory  from "lib/gill/program/service/factory.type";
import GillProgramWebglService    from "lib/gill/program/webgl/service.type";
import StandardGillProgramService from "lib/gill/program/service.class";

class StandardGillProgramServiceFactory implements GillProgramServiceFactory
{
  construct(
    gillProgramCache        : GillProgramCache,
    gillProgramFactory      : GillProgramFactory,
    gillProgramWebglService : GillProgramWebglService
  ): GillProgramService
  {
    return  new StandardGillProgramService(
              gillProgramCache,
              gillProgramFactory,
              gillProgramWebglService
            );
  }
}

export default StandardGillProgramServiceFactory;
