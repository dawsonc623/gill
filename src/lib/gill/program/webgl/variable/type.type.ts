import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";

interface GillProgamWebglVariableType
{
  getDataType(): GLenum;

  getTypedArrayConstructor(): TypedArrayConstructor;

  getUnitSize(): GLint;
}

export default GillProgamWebglVariableType;
