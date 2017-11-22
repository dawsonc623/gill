import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";

interface GillWebglVariable
{
  getDataType(): GLenum;

  getTypedArrayConstructor(): TypedArrayConstructor;

  getUnitSize(): GLint;
}

export default GillWebglVariable;
