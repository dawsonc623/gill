import AttributeValue from "lib/gill/model/attribute-value.type";
import Model          from "lib/gill/model.type";

interface GillVertex
{
  addModelIndex(
    model : Model,
    index : number
  ): void;

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
