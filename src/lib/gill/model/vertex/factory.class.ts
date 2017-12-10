import AttributeDataRepository  from "lib/gill/model/attribute-data/repository.type";
import GillAttributeValueMap    from "lib/gill/model/attribute-value-map.type";
import GillVertex               from "lib/gill/model/vertex.type";
import GillVertexFactory        from "lib/gill/model/vertex/factory.type";
import StandardGillVertex       from "lib/gill/model/vertex.class";

class StandardGillVertexFactory implements GillVertexFactory
{
  construct(
    attributeDataRepository : AttributeDataRepository,
    gillAttributeValues     : GillAttributeValueMap
  ): GillVertex
  {
    return  new StandardGillVertex(
              attributeDataRepository,
              gillAttributeValues
            );
  }
}

export default StandardGillVertexFactory;
