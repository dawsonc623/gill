import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglProgramService              from "lib/gill/webgl/program/service.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";

interface GillWebglServiceFactory
{
  construct(
    gillWebglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    gillWebglProgramService             : GillWebglProgramService,
    gillWebglUniformCollectionFactory   : GillWebglUniformCollectionFactory
  ): GillWebglService;
}

export default GillWebglServiceFactory;
