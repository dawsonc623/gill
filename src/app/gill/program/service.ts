import GillProgramService         from "lib/gill/program/service.type";

import attributeCollectionFactory from "app/gill/program/attribute/collection/factory";
import attributeFactory           from "app/gill/program/attribute/factory";
import gillProgramCache           from "app/gill/program/cache";
import gillProgramFactory         from "app/gill/program/factory";
import gillProgramServiceFactory  from "app/gill/program/service/factory";
import gillProgramWebglService    from "app/gill/program/webgl/service";
import textureCollectionFactory   from "app/gill/program/texture/collection/factory";
import textureFactory             from "app/gill/program/texture/factory";
import uniformCollectionFactory   from "app/gill/program/uniform/collection/factory";
import uniformFactory             from "app/gill/program/uniform/factory";
import variableTypes              from "app/gill/program/variable/type-map";

const gillProgramService  = gillProgramServiceFactory.construct(
                              attributeCollectionFactory,
                              attributeFactory,
                              gillProgramCache,
                              gillProgramFactory,
                              gillProgramWebglService,
                              textureCollectionFactory,
                              textureFactory,
                              uniformCollectionFactory,
                              uniformFactory,
                              variableTypes
                            );

export default gillProgramService;
