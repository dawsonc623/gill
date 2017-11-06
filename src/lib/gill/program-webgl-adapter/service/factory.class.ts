import GillProgramWebglAttributeCollectionAdapterFactory  from "lib/gill/program-webgl-adapter/attribute/collection/factory.type";
import GillProgramWebglServiceAdapterFactory              from "lib/gill/program-webgl-adapter/service/factory.type";
import GillProgramWebglService                            from "lib/gill/program/webgl/service.type";
import GillProgramWebglUniformCollectionAdapterFactory    from "lib/gill/program-webgl-adapter/uniform/collection/factory.type";
import GillWebglService                                   from "lib/gill/webgl/service.type";
import StandardGillProgramWebglServiceAdapter             from "lib/gill/program-webgl-adapter/service.class";

class StandardGillProgramWebglServiceAdapterFactory implements GillProgramWebglServiceAdapterFactory
{
  construct(
    gillProgramWebglAttributeCollectionAdapterFactory : GillProgramWebglAttributeCollectionAdapterFactory,
    gillProgramWebglUniformCollectionAdapterFactory   : GillProgramWebglUniformCollectionAdapterFactory,
    gillWebglService                                  : GillWebglService
  ): GillProgramWebglService
  {
    return  new StandardGillProgramWebglServiceAdapter(
              gillProgramWebglAttributeCollectionAdapterFactory,
              gillProgramWebglUniformCollectionAdapterFactory,
              gillWebglService
            );
  }
}

export default StandardGillProgramWebglServiceAdapterFactory;
