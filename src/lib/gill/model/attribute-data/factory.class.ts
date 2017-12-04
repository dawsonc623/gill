import AttributeData          from "lib/gill/model/attribute-data.type";
import AttributeDataFactory   from "lib/gill/model/attribute-data/factory.type";
import StandardAttributeData  from "lib/gill/model/attribute-data.class";

class StandardGillModelAttributeDataFactory implements AttributeDataFactory
{
  construct(
    data        : Array<number>,
    hasChanged  : boolean,
    normalized  : GLboolean,
    offset      : GLintptr,
    stride      : GLsizei
  ): AttributeData
  {
    return  new StandardAttributeData(
              data,
              hasChanged,
              normalized,
              offset,
              stride
            );
  }
}

export default StandardGillModelAttributeDataFactory;
