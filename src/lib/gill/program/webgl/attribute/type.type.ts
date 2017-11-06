import TypedArray from "lib/gill/typed-array.type";

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
