import GillAttributeType          from "lib/gill/webgl/attribute/type.type";
import GillAttributeTypeFactory   from "lib/gill/webgl/attribute/type/factory.type";
import GillTypedArrayFactory      from "lib/gill/webgl/typed-array/factory.type";
import StandardGillAttributeType  from "lib/gill/webgl/attribute/type.class";

class StandardGillAttributeTypeFactory implements GillAttributeTypeFactory
{
  construct(
    dataType          : number,
    typedArrayFactory : GillTypedArrayFactory,
    dataSize          : number,
    dataIsNormalized  : GLboolean,
    dataStride        : GLsizei
  ): GillAttributeType
  {
    return  new StandardGillAttributeType(
              dataType,
              typedArrayFactory,
              dataSize,
              dataIsNormalized,
              dataStride
            );
  }
}

export default StandardGillAttributeTypeFactory;
