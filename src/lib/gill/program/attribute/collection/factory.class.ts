import AttributeCollection         from "lib/gill/program/attribute/collection.type";
import AttributeCollectionFactory  from "lib/gill/program/attribute/collection/factory.type";
import StandardAttributeCollection from "lib/gill/program/attribute/collection.class";

class StandardAttributeCollectionFactory implements AttributeCollectionFactory
{
  construct(): AttributeCollection
  {
    return  new StandardAttributeCollection();
  }
}

export default StandardAttributeCollectionFactory;
