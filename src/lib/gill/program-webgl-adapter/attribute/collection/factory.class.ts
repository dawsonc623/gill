import GillProgramWebglAttributeCollection                from "lib/gill/program/webgl/attribute/collection.type";
import GillProgramWebglAttributeCollectionAdapterFactory  from "lib/gill/program-webgl-adapter/attribute/collection/factory.type";
import GillWebglAttributeCollection                       from "lib/gill/webgl/attribute/collection.type";
import StandardGillProgramAttributeCollectionAdapter      from "lib/gill/program-webgl-adapter/attribute/collection.class";

class StandardGillProgramAttributeCollectionAdapterFactory implements GillProgramWebglAttributeCollectionAdapterFactory
{
  construct(
    gillWebglAttributeCollection  : GillWebglAttributeCollection
  ): GillProgramWebglAttributeCollection
  {
    return  new StandardGillProgramAttributeCollectionAdapter(
              gillWebglAttributeCollection
            );
  }
}

export default StandardGillProgramAttributeCollectionAdapterFactory;
