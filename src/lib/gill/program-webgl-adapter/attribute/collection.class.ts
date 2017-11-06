import GillProgramWebglAttribute            from "lib/gill/program/webgl/attribute.type";
import GillProgramWebglAttributeCollection  from "lib/gill/program/webgl/attribute/collection.type";
import GillWebglAttributeCollection         from "lib/gill/webgl/attribute/collection.type";

class GillProgramWebglAttributeCollectionAdapter implements GillProgramWebglAttributeCollection
{
  constructor(
    private gillWebglAttributeCollection  : GillWebglAttributeCollection
  ) {

  }

  eachAttribute(
    action  : (
      attribute : GillProgramWebglAttribute
    ) => void
  ): void
  {
    this.gillWebglAttributeCollection.forEachAttribute(
      action
    );
  }
}

export default GillProgramWebglAttributeCollectionAdapter;
