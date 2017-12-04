import AttributeValue from "lib/gill/model/attribute-value.type";
import Model          from "lib/gill/model.type";
import AttributeData  from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataRepository
{
  getAttributeData(
    model         : Model,
    attributeName : string
  ): AttributeData;

  setValueAt(
    model           : Model,
    attributeName   : string,
    index           : number,
    attributeValue  : AttributeValue
  ): void;
}

export default GillModelAttributeDataRepository;
