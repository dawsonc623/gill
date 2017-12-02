import UniformCollection         from "lib/gill/program/uniform/collection.type";
import UniformCollectionFactory  from "lib/gill/program/uniform/collection/factory.type";
import StandardUniformCollection from "lib/gill/program/uniform/collection.class";

class StandardUniformCollectionFactory implements UniformCollectionFactory
{
  construct(): UniformCollection
  {
    return  new StandardUniformCollection();
  }
}

export default StandardUniformCollectionFactory;
