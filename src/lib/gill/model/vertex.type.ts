import GillAttributeValue from "lib/gill/model/attribute-value.type";

interface GillVertex
{
  getAttribute(
    name  : string
  ): GillAttributeValue;

  setAttribute(
    name  : string,
    value : GillAttributeValue
  ): this;
}

export default GillVertex;
