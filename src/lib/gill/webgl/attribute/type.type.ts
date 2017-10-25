import TypedArray from "lib/gill/webgl/typed-array.type";

interface GillAttributeType
{
  getDataSize(): number;

  getDataType(): number;

  toTypedArray(
    webglVariableData : Array<number>
  ): TypedArray;
}

export default GillAttributeType;
