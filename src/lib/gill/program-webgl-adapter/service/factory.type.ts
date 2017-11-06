import GillProgramWebglAttributeCollectionAdapterFactory  from "lib/gill/program-webgl-adapter/attribute/collection/factory.type";
import GillProgramWebglService                            from "lib/gill/program/webgl/service.type";
import GillProgramWebglUniformCollectionAdapterFactory    from "lib/gill/program-webgl-adapter/uniform/collection/factory.type";
import GillWebglService                                   from "lib/gill/webgl/service.type";

interface GillProgramWebglServiceAdapterFactory
{
  construct(
    gillProgramWebglAttributeCollectionAdapterFactory : GillProgramWebglAttributeCollectionAdapterFactory,
    gillProgramWebglUniformCollectionAdapterFactory   : GillProgramWebglUniformCollectionAdapterFactory,
    gillWebglService                                  : GillWebglService
  ): GillProgramWebglService;
}

export default GillProgramWebglServiceAdapterFactory;
