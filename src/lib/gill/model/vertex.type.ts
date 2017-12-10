import AttributeValue from "lib/gill/model/attribute-value.type";

interface GillVertex
{
  eachAttribute(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void;

  getAttribute(
    name  : string
  ): AttributeValue;

  setAttribute(
    name  : string,
    value : AttributeValue
  ): this;
}

export default GillVertex;
