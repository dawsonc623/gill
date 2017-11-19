import GillWebglAttributeType from "lib/gill/webgl/attribute/type.type";
import GillTypedArrayFactory  from "lib/gill/typed-array/factory.type";
import TypedArray             from "lib/gill/typed-array.type";

class StandardGillWebglAttributeType implements GillWebglAttributeType
{
  constructor(
    private dataType                    : number,
    private gillWebglTypedArrayFactory  : GillTypedArrayFactory,
    private dataSize                    : number,
    private dataIsNormalized            : GLboolean,
    private dataStride                  : GLsizei,
    private dataOffset                  : GLintptr
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
    return  this.gillWebglTypedArrayFactory.construct(
              webglVariableData
            );
  }
}

export default StandardGillWebglAttributeType;
