import TypedArray from "lib/gill/typed-array.type";

interface GillTypedArrayFactory
{
  construct(
    arrayData:  Array<number>
  ): TypedArray;
}

export default GillTypedArrayFactory;
