import AttributeDataRepository  from "lib/gill/model/attribute-data/repository.type";
import GillAttributeValueMap    from "lib/gill/model/attribute-value-map.type";
import GillVertex               from "lib/gill/model/vertex.type";

interface GillVertexFactory
{
  construct(
    attributeDataRepository : AttributeDataRepository,
    gillAttributeValues     : GillAttributeValueMap
  ): GillVertex;
}

export default GillVertexFactory;
