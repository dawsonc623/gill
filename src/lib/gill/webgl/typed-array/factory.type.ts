import TypedArray from "lib/gill/typed-array.type";

interface GillWebglTypedArrayFactory
{
  construct(
    arrayData:  Array<number>
  ): TypedArray;
}

export default GillWebglTypedArrayFactory;
