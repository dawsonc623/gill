import GillProgramCache           from "lib/gill/program/cache.type";
import GillProgramFactory         from "lib/gill/program/factory.type";
import GillProgramService         from "lib/gill/program/service.type";
import GillWebglService           from "lib/gill/webgl/service.type";
import GillProgramServiceFactory  from "lib/gill/program/service/factory.type";
import StandardGillProgramService from "lib/gill/program/service.class";

class StandardGillProgramServiceFactory implements GillProgramServiceFactory
{
  construct(
    gillProgramCache    : GillProgramCache,
    gillProgramFactory  : GillProgramFactory,
    gillWebglService    : GillWebglService
  ): GillProgramService
  {
    return  new StandardGillProgramService(
              gillProgramCache,
              gillProgramFactory,
              gillWebglService
            );
  }
}

export default StandardGillProgramServiceFactory;
