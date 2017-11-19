import GillTypedArrayFactory        from "lib/gill/typed-array/factory.type";
import GillWebglVariableTypeFactory from "lib/gill/webgl/variable/type.type";

interface GillWebglVariableTypeFactoryFactory
{
  construct(
    dataType          : GLenum,
    typedArrayFactory : GillTypedArrayFactory,
    unitSize          : GLint
  ): GillWebglVariableTypeFactory;
}

export default GillWebglVariableTypeFactoryFactory;
