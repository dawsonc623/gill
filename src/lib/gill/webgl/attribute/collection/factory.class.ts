import GillAttributeCollection          from "lib/gill/webgl/attribute/collection.type";
import GillAttributeCollectionFactory   from "lib/gill/webgl/attribute/collection/factory.type";
import StandardGillAttributeCollection  from "lib/gill/webgl/attribute/collection.class";

class StandardGillAttributeCollectionFactory implements GillAttributeCollectionFactory
{
  construct(): GillAttributeCollection
  {
    return  new StandardGillAttributeCollection();
  }
}

export default StandardGillAttributeCollectionFactory;
