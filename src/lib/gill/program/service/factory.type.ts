import GillProgramCache   from "lib/gill/program/cache.type";
import GillProgramFactory from "lib/gill/program/factory.type";
import GillProgramService from "lib/gill/program/service.type";
import GillWebglService   from "lib/gill/webgl/service.type";

interface GillProgramServiceFactory
{
  construct(
    gillProgramCache    : GillProgramCache,
    gillProgramFactory  : GillProgramFactory,
    webglService        : GillWebglService
  ): GillProgramService;
}

export default GillProgramServiceFactory;
