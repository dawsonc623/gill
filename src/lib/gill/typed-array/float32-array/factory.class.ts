import TypedArray             from "lib/gill/typed-array.type";
import GillTypedArrayFactory  from "lib/gill/typed-array/factory.type";

class GillFloat32ArrayFactory implements GillTypedArrayFactory
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

export default GillFloat32ArrayFactory;
