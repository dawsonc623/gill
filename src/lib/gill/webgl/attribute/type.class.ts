import GillAttributeType      from "lib/gill/webgl/attribute/type.type";
import GillTypedArrayFactory  from "lib/gill/webgl/typed-array/factory.type";

class StandardGillAttributeType implements GillAttributeType
{
  constructor(
    private dataType          : number, //TODO Constrain to WebGL type constant values?
    private typedArrayFactory : GillTypedArrayFactory,
    private dataSize          : number
  ) {

  }

  getDataSize(): number
  {
    return  this.dataSize;
  }

  getDataType(): number
  {
    return  this.dataType;
  }

  getTypedArrayFactory(): GillTypedArrayFactory
  {
    return  this.typedArrayFactory;
  }
}

export default StandardGillAttributeType;
