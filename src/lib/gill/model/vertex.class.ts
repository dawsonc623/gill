import GillAttributeValue     from "lib/gill/model/attribute-value.type";
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
      attributeValue  : GillAttributeValue
    ) => void
  ): void
  {
    this.gillAttributeValues.eachValue(
      action
    );
  }

  getAttribute(
    name  : string
  ): GillAttributeValue
  {
    return  this.gillAttributeValues.getValue(
              name
            );
  }

  setAttribute(
    name  : string,
    value : GillAttributeValue
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
