import GillUniformCollection          from "lib/gill/webgl/uniform/collection.type";
import GillUniformCollectionFactory   from "lib/gill/webgl/uniform/collection/factory.type";
import StandardGillUniformCollection  from "lib/gill/webgl/uniform/collection.class";

class StandardGillUniformCollectionFactory implements GillUniformCollectionFactory
{
  construct(): GillUniformCollection
  {
    return  new StandardGillUniformCollection();
  }
}

export default StandardGillUniformCollectionFactory;
