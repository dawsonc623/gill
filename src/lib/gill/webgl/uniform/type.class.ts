import GillUniformType  from "lib/gill/webgl/uniform/type.type";

class StandardGillUniformType implements GillUniformType
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

export default StandardGillUniformType;
