import GillTypedArrayFactory  from "lib/gill/typed-array/factory.type";

interface GillProgamWebglVariableType
{
  getDataType(): GLenum;

    getTypedArrayFactory(): GillTypedArrayFactory;

    getUnitSize(): GLint;
}

export default GillProgamWebglVariableType;
