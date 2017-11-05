import TypedArray from "lib/gill/webgl/typed-array.type";

interface GillWebglAttributeType
{
  getDataIsNormalized(): GLboolean;

  getDataOffset(): GLintptr;

  getDataSize(): number;

  getDataStride(): GLsizei;

  getDataType(): number;

  toTypedArray(
    webglVariableData : Array<number>
  ): TypedArray;
}

export default GillWebglAttributeType;
