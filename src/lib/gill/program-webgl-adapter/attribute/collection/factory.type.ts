import GillProgramWebglAttributeCollection  from "lib/gill/program/webgl/attribute/collection.type";
import GillWebglAttributeCollection         from "lib/gill/webgl/attribute/collection.type";

interface GillProgramWebglAttributeCollectionAdapterFactory
{
  construct(
    gillWebglAttributeCollection  : GillWebglAttributeCollection
  ): GillProgramWebglAttributeCollection;
}

export default GillProgramWebglAttributeCollectionAdapterFactory;
