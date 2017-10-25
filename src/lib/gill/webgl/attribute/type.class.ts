import GillAttributeType      from "lib/gill/webgl/attribute/type.type";
import GillTypedArrayFactory  from "lib/gill/webgl/typed-array/factory.type";
import TypedArray             from "lib/gill/webgl/typed-array.type";

class StandardGillAttributeType implements GillAttributeType
{
  constructor(
    private dataType          : number, //TODO Constrain to WebGL type constant values?
    private typedArrayFactory : GillTypedArrayFactory,
    private dataSize          : number,
    private dataIsNormalized  : GLboolean
  ) {

  }

  getDataIsNormalized(): GLboolean
  {
    return  this.dataIsNormalized;
  }

  getDataSize(): number
  {
    return  this.dataSize;
  }

  getDataType(): number
  {
    return  this.dataType;
  }

  toTypedArray(
    webglVariableData : Array<number>
  ): TypedArray
  {
    return  this.typedArrayFactory.construct(
              webglVariableData
            );
  }
}

export default StandardGillAttributeType;
