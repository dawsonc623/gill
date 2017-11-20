import GillModelAttributeData from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataCache
{
  getAttributeData(
    attributeName : string
  ): GillModelAttributeData;

  hasAttributeData(
    attributeName : string
  ): boolean;

  setAttributeData(
    attributeName : string,
    attributeData : GillModelAttributeData
  ): void;
}

export default GillModelAttributeDataCache;
