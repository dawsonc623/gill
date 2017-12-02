import GillModelAttributeData   from "lib/gill/model/attribute-data.type";
import GillModelAttributeValue  from "lib/gill/model/attribute-value.type";

class StandardGillModelAttributeData implements GillModelAttributeData
{
  constructor(
    private data        : Array<number>,
    private hasChanged  : boolean,
    private normalized  : GLboolean,
    private offset      : GLintptr,
    private stride      : GLsizei
  ) {

  }

  addAttributeValue(
    attributeValue  : GillModelAttributeValue
  ): void
  {
    attributeValue.addToAttributeData(
      this.data
    );

    this.hasChanged = true;
  }

  getData(): Array<number>
  {
    return  this.data;
  }

  getOffset(): GLintptr
  {
    return  this.offset;
  }

  getStride(): GLsizei
  {
    return  this.stride;
  }

  normalize(): GLboolean
  {
    return  this.normalized;
  }

  needsBuffered(): boolean
  {
    return  this.hasChanged;
  }

  setNeedsBuffered(
    needsBuffered : boolean
  ): void
  {
    this.hasChanged = needsBuffered;
  }
}

export default StandardGillModelAttributeData;
