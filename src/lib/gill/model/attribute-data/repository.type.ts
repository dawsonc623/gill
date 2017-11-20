import GillModelAttributeData from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataRepository
{
  getAttributeData(
    attributeName : string
  ): GillModelAttributeData;
}

export default GillModelAttributeDataRepository;
