import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglBufferRenderingContextMap   from "lib/gill/webgl/buffer-rendering-context-map.type";
import GillWebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import GillWebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.type";
import GillWebglProgramService              from "lib/gill/webgl/program/service.type";
import GillWebglRenderingContextRepository  from "lib/gill/webgl/rendering-context/repository.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglServiceFactory              from "lib/gill/webgl/service/factory.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";
import StandardGillWebglService             from "lib/gill/webgl/service.class";

class StandardGillWebglServiceFactory implements GillWebglServiceFactory
{
  construct(
    gillWebglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    gillWebglBufferRenderingContexts    : GillWebglBufferRenderingContextMap,
    gillWebglProgramFactory             : GillWebglProgramFactory,
    gillWebglProgramRenderingContexts   : GillWebglProgramRenderingContextMap,
    gillWebglProgramService             : GillWebglProgramService,
    gillWebglRenderingContextRepository : GillWebglRenderingContextRepository,
    gillWebglUniformCollectionFactory   : GillWebglUniformCollectionFactory
  ): GillWebglService
  {
    return  new StandardGillWebglService(
              gillWebglAttributeCollectionFactory,
              gillWebglBufferRenderingContexts,
              gillWebglProgramFactory,
              gillWebglProgramRenderingContexts,
              gillWebglProgramService,
              gillWebglRenderingContextRepository,
              gillWebglUniformCollectionFactory
            );
  }
}

export default StandardGillWebglServiceFactory;
