import GillAttributeType      from "lib/gill/webgl/attribute/type.type";
import GillTypedArrayFactory  from "lib/gill/webgl/typed-array/factory.type";
import TypedArray             from "lib/gill/webgl/typed-array.type";

class StandardGillAttributeType implements GillAttributeType
{
  constructor(
    private dataType          : number,
    private typedArrayFactory : GillTypedArrayFactory,
    private dataSize          : number,
    private dataIsNormalized  : GLboolean,
    private dataStride        : GLsizei,
    private dataOffset        : GLintptr
  ) {

  }

  getDataIsNormalized(): GLboolean
  {
    return  this.dataIsNormalized;
  }

  getDataOffset(): GLintptr
  {
    return  this.dataOffset;
  }

  getDataSize(): number
  {
    return  this.dataSize;
  }

  getDataStride(): GLsizei
  {
    return  this.dataStride;
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
