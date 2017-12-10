import AttributeData   from "lib/gill/model/attribute-data.type";
import AttributeValue  from "lib/gill/model/attribute-value.type";

class StandardAttributeData implements AttributeData
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
    attributeValue  : AttributeValue
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

  setValueAt(
    index           : number,
    attributeValue  : AttributeValue
  ): void
  {
    const newData = new Array<number>();

    attributeValue.addToAttributeData(
      newData
    );

    this.data.splice(
      index * newData.length, //TODO Is this reliable? Should data know the size of each "unit"? Probably
      newData.length,
      ...newData
    );

    this.hasChanged = true;
  }
}

export default StandardAttributeData;
