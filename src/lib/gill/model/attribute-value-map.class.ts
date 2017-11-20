import GillAttributeValueMap  from "lib/gill/model/attribute-value-map.type";
import GillAttributeValue     from "lib/gill/model/attribute-value.type";

class StandardGillAttributeValueMap implements GillAttributeValueMap
{
  private attributeValues  : Map<string, GillAttributeValue>;

  constructor()
  {
    this.attributeValues = new Map<string, GillAttributeValue>();
  }

  eachValue(
    action  : (
      attributeName   : string,
      attributeValue  : GillAttributeValue
    ) => void
  ): void
  {
    this.attributeValues.forEach(
      (
        attributeValue  : GillAttributeValue,
        attributeName   : string
      ) =>
      {
        action(
          attributeName,
          attributeValue
        );
      }
    )
  }

  hasValue(
    attributeName : string
  ): boolean
  {
    return  this.attributeValues.has(
              attributeName
            );
  }

  getValue(
    attributeName : string
  ): GillAttributeValue
  {
    return  this.attributeValues.get(
              attributeName
            );
  }

  setValue(
    attributeName   : string,
    attributeValue  : GillAttributeValue
  ): void
  {
    this.attributeValues.set(
      attributeName,
      attributeValue
    );
  }
}

export default StandardGillAttributeValueMap;
