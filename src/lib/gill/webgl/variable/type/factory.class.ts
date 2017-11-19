import GillTypedArrayFactory          from "lib/gill/typed-array/factory.type";
import GillWebglVariableType          from "lib/gill/webgl/variable/type.type";
import GillWebglVariableTypeFactory   from "lib/gill/webgl/variable/type/factory.type";
import StandardGillWebglVariableType  from "lib/gill/webgl/variable/type.class";

class StandardGillWebglVariableTypeFactory implements GillWebglVariableTypeFactory
{
  construct(
    dataType          : GLenum,
    typedArrayFactory : GillTypedArrayFactory,
    unitSize          : GLint
  ): GillWebglVariableType
  {
    return  new StandardGillWebglVariableType(
              dataType,
              typedArrayFactory,
              unitSize
            );
  }
}

export default StandardGillWebglVariableTypeFactory;
