import TypedArray         from "lib/gill/webgl/typed-array.type";
import TypedArrayFactory  from "lib/gill/webgl/typed-array/factory.type";

class Float32ArrayFactory implements TypedArrayFactory
{
  construct(
    arrayData:  Array<number>
  ): TypedArray
  {
    return  Float32Array.from(
              arrayData
            );
  }
}

export default Float32ArrayFactory;
