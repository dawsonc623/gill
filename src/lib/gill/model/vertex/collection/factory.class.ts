import GillVertexCollection         from "lib/gill/model/vertex/collection.type";
import GillVertexCollectionFactory  from "lib/gill/model/vertex/collection/factory.type";
import StandardGillVertexCollection from "lib/gill/model/vertex/collection.class";

class StandardGillVertexCollectionFactory implements GillVertexCollectionFactory
{
  construct(): GillVertexCollection
  {
    return  new StandardGillVertexCollection();
  }
}

export default StandardGillVertexCollectionFactory;
