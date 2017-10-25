import gillProgramCache           from "app/gill/program/cache";
import gillProgramFactory         from "app/gill/program/factory";
import gillProgramServiceFactory  from "app/gill/program/service/factory";
import gillWebglService           from "app/gill/webgl/service";

const gillProgramService  = gillProgramServiceFactory.construct(
                              gillProgramCache,
                              gillProgramFactory,
                              gillWebglService
                            );

export default gillProgramService;
