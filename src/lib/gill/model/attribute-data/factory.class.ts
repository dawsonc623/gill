import GillModelAttributeData         from "lib/gill/model/attribute-data.type";
import GillModelAttributeDataFactory  from "lib/gill/model/attribute-data/factory.type";
import StandardGillModelAttributeData from "lib/gill/model/attribute-data.class";

class StandardGillModelAttributeDataFactory implements GillModelAttributeDataFactory
{
  construct(
    data        : Array<number>,
    hasChanged  : boolean,
    normalized  : GLboolean,
    offset      : GLintptr,
    stride      : GLsizei
  ): GillModelAttributeData
  {
    return  new StandardGillModelAttributeData(
              data,
              hasChanged,
              normalized,
              offset,
              stride
            );
  }
}

export default StandardGillModelAttributeDataFactory;
