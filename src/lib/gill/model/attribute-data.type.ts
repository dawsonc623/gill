import GillModelAttributeValue  from "lib/gill/model/attribute-value.type";

interface GillModelAttributeData
{
  addAttributeValue(
    attributeValue  : GillModelAttributeValue
  ): void;

  getData(): Array<number>;

  getOffset(): GLintptr;

  getStride(): GLsizei;

  isNormalized(): GLboolean;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;
}

export default GillModelAttributeData;
