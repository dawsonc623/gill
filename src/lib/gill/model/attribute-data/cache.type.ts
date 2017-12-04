import Model          from "lib/gill/model.type";
import AttributeData  from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataCache
{
  getAttributeData(
    model         : Model,
    attributeName : string
  ): AttributeData;

  hasAttributeData(
    model         : Model,
    attributeName : string
  ): boolean;

  setAttributeData(
    model         : Model,
    attributeName : string,
    attributeData : AttributeData
  ): void;
}

export default GillModelAttributeDataCache;
