import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";

interface VariableType
{
  getDataType(): GLenum;

  getTypedArrayConstructor(): TypedArrayConstructor;

  getUnitSize(): GLint;
}

export default VariableType;
