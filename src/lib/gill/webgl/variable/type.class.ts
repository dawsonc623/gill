import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";
import GillWebglVariable      from "lib/gill/webgl/variable/type.type";

class StandardGillWebglVariable implements GillWebglVariable
{
  constructor(
    private dataType              : GLenum,
    private typedArrayConstructor : TypedArrayConstructor,
    private unitSize              : GLint
  ) {

  }

  getDataType(): GLenum
  {
    return  this.dataType;
  }

  getTypedArrayConstructor(): TypedArrayConstructor
  {
    return  this.typedArrayConstructor;
  }

  getUnitSize(): GLint
  {
    return  this.unitSize;
  }
}

export default StandardGillWebglVariable;
