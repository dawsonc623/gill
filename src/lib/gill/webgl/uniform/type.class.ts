import GillWebglUniformType from "lib/gill/webgl/uniform/type.type";

class StandardGillWebglUniformType implements GillWebglUniformType
{
  constructor(
    private dataType  : string,
    private dataSize  : number
  ) {

  }

  getDataSize(): number
  {
    return  this.dataSize;
  }

  getDataType(): string
  {
    return  this.dataType;
  }
}

export default StandardGillWebglUniformType;
