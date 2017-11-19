import GillWebglAttributeType from "lib/gill/webgl/attribute/type.type";
import GillTypedArrayFactory  from "lib/gill/typed-array/factory.type";

interface GillWebglAttributeTypeFactory
{
  construct(
    dataType                    : number,
    gillWebglTypedArrayFactory  : GillTypedArrayFactory,
    dataSize                    : number,
    dataIsNormalized            : GLboolean,
    dataStride                  : GLsizei,
    dataOffset                  : GLintptr
  ): GillWebglAttributeType;
}

export default GillWebglAttributeTypeFactory;
