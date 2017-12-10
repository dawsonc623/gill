import TypedArrayConstructor  from "lib/gill/typed-array/constructor.type";
import VariableType           from "lib/gill/program/variable/type.type";

class StandardVariableType implements VariableType
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

export default StandardVariableType;
