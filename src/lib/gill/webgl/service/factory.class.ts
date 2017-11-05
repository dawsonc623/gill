import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglProgramService              from "lib/gill/webgl/program/service.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglServiceFactory              from "lib/gill/webgl/service/factory.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";
import StandardGillWebglService             from "lib/gill/webgl/service.class";

class StandardGillWebglServiceFactory implements GillWebglServiceFactory
{
  construct(
    gillWebglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    gillWebglProgramService             : GillWebglProgramService,
    gillWebglUniformCollectionFactory   : GillWebglUniformCollectionFactory
  ): GillWebglService
  {
    return  new StandardGillWebglService(
              gillWebglAttributeCollectionFactory,
              gillWebglProgramService,
              gillWebglUniformCollectionFactory
            );
  }
}

export default StandardGillWebglServiceFactory;
