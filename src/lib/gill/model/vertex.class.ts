import AttributeValue         from "lib/gill/model/attribute-value.type";
import GillAttributeValueMap  from "lib/gill/model/attribute-value-map.type";
import GillVertex             from "lib/gill/model/vertex.type";

class StandardGillVertex implements GillVertex
{
  constructor(
    private gillAttributeValues : GillAttributeValueMap
  ) {

  }

  eachAttribute(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void
  {
    this.gillAttributeValues.eachValue(
      action
    );
  }

  getAttribute(
    name  : string
  ): AttributeValue
  {
    return  this.gillAttributeValues.getValue(
              name
            );
  }

  setAttribute(
    name  : string,
    value : AttributeValue
  ): this
  {
    this.gillAttributeValues.setValue(
      name,
      value
    );

    return  this;
  }
}

export default StandardGillVertex;
