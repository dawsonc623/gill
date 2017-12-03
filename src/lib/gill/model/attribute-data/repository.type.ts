import Model                  from "lib/gill/model.type";
import GillModelAttributeData from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataRepository
{
  getAttributeData(
    model         : Model,
    attributeName : string
  ): GillModelAttributeData;
}

export default GillModelAttributeDataRepository;
