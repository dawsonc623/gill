import GillWebglAttributeCollection         from "lib/gill/webgl/attribute/collection.type";
import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import StandardGillWebglAttributeCollection from "lib/gill/webgl/attribute/collection.class";

class StandardGillWebglAttributeCollectionFactory implements GillWebglAttributeCollectionFactory
{
  construct(): GillWebglAttributeCollection
  {
    return  new StandardGillWebglAttributeCollection();
  }
}

export default StandardGillWebglAttributeCollectionFactory;
