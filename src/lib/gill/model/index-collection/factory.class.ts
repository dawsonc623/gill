import GillIndexCollection          from "lib/gill/model/index-collection.type";
import GillIndexCollectionFactory   from "lib/gill/model/index-collection/factory.type";
import StandardGillIndexCollection  from "lib/gill/model/index-collection.class";

class StandardGillIndexCollectionFactory implements GillIndexCollectionFactory
{
  construct(): GillIndexCollection
  {
    return  new StandardGillIndexCollection();
  }
}

export default StandardGillIndexCollectionFactory;
