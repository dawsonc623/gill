import TypedArrayConstructor          from "lib/gill/typed-array/constructor.type";
import GillWebglVariableType          from "lib/gill/webgl/variable/type.type";
import GillWebglVariableTypeFactory   from "lib/gill/webgl/variable/type/factory.type";
import StandardGillWebglVariableType  from "lib/gill/webgl/variable/type.class";

class StandardGillWebglVariableTypeFactory implements GillWebglVariableTypeFactory
{
  construct(
    dataType              : GLenum,
    typedArrayConstructor : TypedArrayConstructor,
    unitSize              : GLint
  ): GillWebglVariableType
  {
    return  new StandardGillWebglVariableType(
              dataType,
              typedArrayConstructor,
              unitSize
            );
  }
}

export default StandardGillWebglVariableTypeFactory;
