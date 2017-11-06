import GillProgramCache         from "lib/gill/program/cache.type";
import GillProgramFactory       from "lib/gill/program/factory.type";
import GillProgramService       from "lib/gill/program/service.type";
import GillProgramWebglService  from "lib/gill/program/webgl/service.type";

interface GillProgramServiceFactory
{
  construct(
    gillProgramCache        : GillProgramCache,
    gillProgramFactory      : GillProgramFactory,
    gillProgramWebglService : GillProgramWebglService
  ): GillProgramService;
}

export default GillProgramServiceFactory;
