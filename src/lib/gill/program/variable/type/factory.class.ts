import TypedArrayConstructor          from "lib/gill/typed-array/constructor.type";
import VariableType          from "lib/gill/program/variable/type.type";
import VariableTypeFactory   from "lib/gill/program/variable/type/factory.type";
import StandardVariableType  from "lib/gill/program/variable/type.class";

class StandardVariableTypeFactory implements VariableTypeFactory
{
  construct(
    dataType              : GLenum,
    typedArrayConstructor : TypedArrayConstructor,
    unitSize              : GLint
  ): VariableType
  {
    return  new StandardVariableType(
              dataType,
              typedArrayConstructor,
              unitSize
            );
  }
}

export default StandardVariableTypeFactory;
