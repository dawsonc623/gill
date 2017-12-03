import Model                  from "lib/gill/model.type";
import GillModelAttributeData from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataCache
{
  getAttributeData(
    model         : Model,
    attributeName : string
  ): GillModelAttributeData;

  hasAttributeData(
    model         : Model,
    attributeName : string
  ): boolean;

  setAttributeData(
    model         : Model,
    attributeName : string,
    attributeData : GillModelAttributeData
  ): void;
}

export default GillModelAttributeDataCache;
