import GillTypedArrayFactory from "lib/gill/typed-array/factory.type";

interface GillWebglVariable
{
  getDataType(): GLenum;

  getTypedArrayFactory(): GillTypedArrayFactory;

  getUnitSize(): GLint;
}

export default GillWebglVariable;
