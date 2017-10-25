import GillAttributeValueMap  from "lib/gill/model/attribute-value-map.type";
import GillVertex             from "lib/gill/model/vertex.type";
import GillVertexFactory      from "lib/gill/model/vertex/factory.type";
import StandardGillVertex     from "lib/gill/model/vertex.class";

class StandardGillVertexFactory implements GillVertexFactory
{
  construct(
    gillAttributeValues : GillAttributeValueMap
  ): GillVertex
  {
    return  new StandardGillVertex(
              gillAttributeValues
            );
  }
}

export default StandardGillVertexFactory;
