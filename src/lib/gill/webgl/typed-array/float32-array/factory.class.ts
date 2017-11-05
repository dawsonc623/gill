import TypedArray                 from "lib/gill/typed-array.type";
import GillWebglTypedArrayFactory from "lib/gill/webgl/typed-array/factory.type";

class GillWebglFloat32ArrayFactory implements GillWebglTypedArrayFactory
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

export default GillWebglFloat32ArrayFactory;
