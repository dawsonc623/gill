import GillAttributeValue from "lib/gill/model/attribute-value.type";

interface GillAttributeValueMap
{
  eachValue(
    action  : (
      attributeName   : string,
      attributeValue  : GillAttributeValue
    ) => void
  ): void;

  hasValue(
    attributeName : string,
  ): boolean;

  getValue(
    attributeName : string,
  ): GillAttributeValue;

  setValue(
    attributeName : string,
    attributeValue : GillAttributeValue
  ): void;
}

export default GillAttributeValueMap;
