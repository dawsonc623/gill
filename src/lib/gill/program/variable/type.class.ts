import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";
import Variable      from "lib/gill/program/variable/type.type";

class StandardVariable implements Variable
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

export default StandardVariable;
