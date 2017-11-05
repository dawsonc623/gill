import TypedArray from "lib/gill/webgl/typed-array.type";

interface GillWebglTypedArrayFactory
{
  construct(
    arrayData:  Array<number>
  ): TypedArray;
}

export default GillWebglTypedArrayFactory;
