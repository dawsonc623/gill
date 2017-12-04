import AttributeValue from "lib/gill/model/attribute-value.type";

interface AttributeData
{
  addAttributeValue(
    attributeValue  : AttributeValue
  ): void;

  getData(): Array<number>;

  getOffset(): GLintptr;

  getStride(): GLsizei;

  normalize(): GLboolean;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;

  setValueAt(
    index           : number,
    attributeValue  : AttributeValue
  ): void;
}

export default AttributeData;
