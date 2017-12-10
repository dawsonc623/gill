import AttributeValue from "lib/gill/model/attribute-value.type";

interface GillAttributeValueMap
{
  eachValue(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void;

  hasValue(
    attributeName : string,
  ): boolean;

  getValue(
    attributeName : string,
  ): AttributeValue;

  setValue(
    attributeName : string,
    attributeValue : AttributeValue
  ): void;
}

export default GillAttributeValueMap;
