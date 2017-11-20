import GillAttributeValue from "lib/gill/model/attribute-value.type";

interface GillVertex
{
  eachAttribute(
    action  : (
      attributeName   : string,
      attributeValue  : GillAttributeValue
    ) => void
  ): void;

  getAttribute(
    name  : string
  ): GillAttributeValue;

  setAttribute(
    name  : string,
    value : GillAttributeValue
  ): this;
}

export default GillVertex;
