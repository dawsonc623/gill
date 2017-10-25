import GillAttributeValueMap  from "lib/gill/model/attribute-value-map.type";
import GillVertex             from "lib/gill/model/vertex.type";

interface GillVertexFactory
{
  construct(
    gillAttributeValues : GillAttributeValueMap
  ): GillVertex;
}

export default GillVertexFactory;
