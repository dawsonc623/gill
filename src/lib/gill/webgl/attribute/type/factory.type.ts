import GillAttributeType      from "lib/gill/webgl/attribute/type.type";
import GillTypedArrayFactory  from "lib/gill/webgl/typed-array/factory.type";

interface GillAttributeTypeFactory
{
  construct(
    dataType          : number,
    typedArrayFactory : GillTypedArrayFactory,
    dataSize          : number,
    dataIsNormalized  : GLboolean,
    dataStride        : GLsizei
  ): GillAttributeType;
}

export default GillAttributeTypeFactory;
