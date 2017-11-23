import gillWebglAttributeCollectionFactory  from "app/gill/webgl/attribute/collection/factory";
import gillWebglProgramFactory              from "app/gill/webgl/program/factory";
import gillWebglProgramRenderingContextMap  from "app/gill/webgl/program-rendering-context-map";
import gillWebglProgramService              from "app/gill/webgl/program/service";
import gillWebglRenderingContextRepository  from "app/gill/webgl/rendering-context/repository";
import gillWebglServiceFactory              from "app/gill/webgl/service/factory";
import gillWebglUniformCollectionFactory    from "app/gill/webgl/uniform/collection/factory";

const webglService  = gillWebglServiceFactory.construct(
                        gillWebglAttributeCollectionFactory,
                        gillWebglProgramFactory,
                        gillWebglProgramRenderingContextMap,
                        gillWebglProgramService,
                        gillWebglRenderingContextRepository,
                        gillWebglUniformCollectionFactory
                      );

export default webglService;