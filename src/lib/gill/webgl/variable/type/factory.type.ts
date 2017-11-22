import TypedArrayConstructor        from "lib/gill/typed-array/constructor.type";
import GillWebglVariableTypeFactory from "lib/gill/webgl/variable/type.type";

interface GillWebglVariableTypeFactoryFactory
{
  construct(
    dataType              : GLenum,
    typedArrayConstructor : TypedArrayConstructor,
    unitSize              : GLint
  ): GillWebglVariableTypeFactory;
}

export default GillWebglVariableTypeFactoryFactory;
