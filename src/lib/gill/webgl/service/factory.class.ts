import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglAttributeFactory            from "lib/gill/webgl/attribute/factory.type";
import GillWebglAttributeTypeFactory        from "lib/gill/webgl/attribute/type/factory.type";
import GillWebglAttributeTypeMap            from "lib/gill/webgl/attribute/type/map.type";
import GillWebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";
import GillWebglServiceFactory              from "lib/gill/webgl/service/factory.type";
import GillWebglUniformFactory              from "lib/gill/webgl/uniform/factory.type";
import GillWebglUniformTypeFactory          from "lib/gill/webgl/uniform/type/factory.type";
import GillWebglUniformTypeMap              from "lib/gill/webgl/uniform/type/map.type";
import StandardGillWebglService             from "lib/gill/webgl/service.class";

class StandardGillWebglServiceFactory implements GillWebglServiceFactory
{
  construct(
    webglProgramFactory             : GillWebglProgramFactory,
    webglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    webglAttributeFactory           : GillWebglAttributeFactory,
    webglAttributeTypeFactory       : GillWebglAttributeTypeFactory,
    webglAttributeTypeMap           : GillWebglAttributeTypeMap,
    webglUniformCollectionFactory   : GillWebglUniformCollectionFactory,
    webglUniformFactory             : GillWebglUniformFactory,
    webglUniformTypeFactory         : GillWebglUniformTypeFactory,
    webglUniformTypeMap             : GillWebglUniformTypeMap
  ): GillWebglService
  {
    return  new StandardGillWebglService(
              webglProgramFactory,
              webglAttributeCollectionFactory,
              webglAttributeFactory,
              webglAttributeTypeFactory,
              webglAttributeTypeMap,
              webglUniformCollectionFactory,
              webglUniformFactory,
              webglUniformTypeFactory,
              webglUniformTypeMap
            );
  }
}

export default StandardGillWebglServiceFactory;
