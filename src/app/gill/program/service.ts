import gillProgramCache           from "app/gill/program/cache";
import gillProgramFactory         from "app/gill/program/factory";
import gillProgramServiceFactory  from "app/gill/program/service/factory";
import gillProgramWebglService    from "app/gill/program/webgl/service";

const gillProgramService  = gillProgramServiceFactory.construct(
                              gillProgramCache,
                              gillProgramFactory,
                              gillProgramWebglService
                            );

export default gillProgramService;
