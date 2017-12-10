import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";
import VariableType           from "lib/gill/program/variable/type.type";

interface VariableTypeFactory
{
  construct(
    dataType              : GLenum,
    typedArrayConstructor : TypedArrayConstructor,
    unitSize              : GLint
  ): VariableType;
}

export default VariableTypeFactory;
