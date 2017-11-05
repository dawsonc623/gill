import GillWebglAttributeType         from "lib/gill/webgl/attribute/type.type";
import GillWebglAttributeTypeFactory  from "lib/gill/webgl/attribute/type/factory.type";
import GillWebglTypedArrayFactory     from "lib/gill/webgl/typed-array/factory.type";
import StandardGillWebglAttributeType from "lib/gill/webgl/attribute/type.class";

class StandardGillWebglAttributeTypeFactory implements GillWebglAttributeTypeFactory
{
  construct(
    dataType                    : number,
    gillWebglTypedArrayFactory  : GillWebglTypedArrayFactory,
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
