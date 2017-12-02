import TypedArrayConstructor        from "lib/gill/typed-array/constructor.type";
import VariableTypeFactory from "lib/gill/program/variable/type.type";

interface VariableTypeFactoryFactory
{
  construct(
    dataType              : GLenum,
    typedArrayConstructor : TypedArrayConstructor,
    unitSize              : GLint
  ): VariableTypeFactory;
}

export default VariableTypeFactoryFactory;
