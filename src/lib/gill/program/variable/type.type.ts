import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";

interface Variable
{
  getDataType(): GLenum;

  getTypedArrayConstructor(): TypedArrayConstructor;

  getUnitSize(): GLint;
}

export default Variable;
