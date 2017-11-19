import GillWebglAttributeType         from "lib/gill/webgl/attribute/type.type";
import GillWebglAttributeTypeFactory  from "lib/gill/webgl/attribute/type/factory.type";
import GillTypedArrayFactory          from "lib/gill/typed-array/factory.type";
import StandardGillWebglAttributeType from "lib/gill/webgl/attribute/type.class";

class StandardGillWebglAttributeTypeFactory implements GillWebglAttributeTypeFactory
{
  construct(
    dataType                    : number,
    gillWebglTypedArrayFactory  : GillTypedArrayFactory,
    dataSize                    : number,
    dataIsNormalized            : GLboolean,
    dataStride                  : GLsizei,
    dataOffset                  : GLintptr
  ): GillWebglAttributeType
  {
    return  new StandardGillWebglAttributeType(
              dataType,
              gillWebglTypedArrayFactory,
              dataSize,
              dataIsNormalized,
              dataStride,
              dataOffset
            );
  }
}

export default StandardGillWebglAttributeTypeFactory;
