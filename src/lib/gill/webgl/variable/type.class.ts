import GillTypedArrayFactory  from "lib/gill/typed-array/factory.type";
import GillWebglVariable      from "lib/gill/webgl/variable/type.type";

class StandardGillWebglVariable implements GillWebglVariable
{
  constructor(
    private dataType          : GLenum,
    private typedArrayFactory : GillTypedArrayFactory,
    private unitSize          : GLint
  ) {

  }

  getDataType(): GLenum
  {
    return  this.dataType;
  }

  getTypedArrayFactory(): GillTypedArrayFactory
  {
    return  this.typedArrayFactory;
  }

  getUnitSize(): GLint
  {
    return  this.unitSize;
  }
}

export default StandardGillWebglVariable;
