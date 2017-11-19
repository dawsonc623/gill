import gillWebglAttributeCollectionFactory  from "app/gill/webgl/attribute/collection/factory";
import gillWebglProgramService              from "app/gill/webgl/program/service";
import gillWebglServiceFactory              from "app/gill/webgl/service/factory";
import gillWebglUniformCollectionFactory    from "app/gill/webgl/uniform/collection/factory";

const webglService  = gillWebglServiceFactory.construct(
                        gillWebglAttributeCollectionFactory,
                        gillWebglProgramService,
                        gillWebglUniformCollectionFactory
                      );

export default webglService;