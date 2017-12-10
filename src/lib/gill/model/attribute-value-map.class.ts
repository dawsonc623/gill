import GillAttributeValueMap  from "lib/gill/model/attribute-value-map.type";
import AttributeValue         from "lib/gill/model/attribute-value.type";

class StandardGillAttributeValueMap implements GillAttributeValueMap
{
  private attributeValues  : Map<string, AttributeValue>;

  constructor()
  {
    this.attributeValues = new Map<string, AttributeValue>();
  }

  eachValue(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void
  {
    this.attributeValues.forEach(
      (
        attributeValue  : AttributeValue,
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
  ): AttributeValue
  {
    return  this.attributeValues.get(
              attributeName
            );
  }

  setValue(
    attributeName   : string,
    attributeValue  : AttributeValue
  ): void
  {
    this.attributeValues.set(
      attributeName,
      attributeValue
    );
  }
}

export default StandardGillAttributeValueMap;
