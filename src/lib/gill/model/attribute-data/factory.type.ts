import AttributeData  from "lib/gill/model/attribute-data.type";

interface GillModelAttributeDataFactory
{
  construct(
    data        : Array<number>,
    hasChanged  : boolean,
    normalized  : GLboolean,
    offset      : GLintptr,
    stride      : GLsizei
  ): AttributeData;
}

export default GillModelAttributeDataFactory;
