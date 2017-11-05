import GillWebglUniformCollection         from "lib/gill/webgl/uniform/collection.type";
import GillWebglUniformCollectionFactory  from "lib/gill/webgl/uniform/collection/factory.type";
import StandardGillWebglUniformCollection from "lib/gill/webgl/uniform/collection.class";

class StandardGillWebglUniformCollectionFactory implements GillWebglUniformCollectionFactory
{
  construct(): GillWebglUniformCollection
  {
    return  new StandardGillWebglUniformCollection();
  }
}

export default StandardGillWebglUniformCollectionFactory;
