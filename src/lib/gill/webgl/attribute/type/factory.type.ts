import GillWebglAttributeType     from "lib/gill/webgl/attribute/type.type";
import GillWebglTypedArrayFactory from "lib/gill/webgl/typed-array/factory.type";

interface GillWebglAttributeTypeFactory
{
  construct(
    dataType                    : number,
    gillWebglTypedArrayFactory  : GillWebglTypedArrayFactory,
    dataSize                    : number,
    dataIsNormalized            : GLboolean,
    dataStride                  : GLsizei,
    dataOffset                  : GLintptr
  ): GillWebglAttributeType;
}

export default GillWebglAttributeTypeFactory;
