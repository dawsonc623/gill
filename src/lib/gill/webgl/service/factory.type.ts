import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import GillWebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.type";
import GillWebglProgramService              from "lib/gill/webgl/program/service.type";
import GillWebglRenderingContextRepository  from "lib/gill/webgl/rendering-context/repository.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";

interface GillWebglServiceFactory
{
  construct(
    gillWebglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    gillWebglProgramFactory             : GillWebglProgramFactory,
    gillWebglProgramRenderingContexts   : GillWebglProgramRenderingContextMap,
    gillWebglProgramService             : GillWebglProgramService,
    gillWebglRenderingContextRepository : GillWebglRenderingContextRepository,
    gillWebglUniformCollectionFactory   : GillWebglUniformCollectionFactory
  ): GillWebglService;
}

export default GillWebglServiceFactory;
