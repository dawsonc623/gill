import GillTypedArrayFactory  from "lib/gill/webgl/typed-array/factory.type";

interface GillAttributeType
{
  getDataSize(): number;

  getDataType(): number;

  getTypedArrayFactory(): GillTypedArrayFactory;
}

export default GillAttributeType;
