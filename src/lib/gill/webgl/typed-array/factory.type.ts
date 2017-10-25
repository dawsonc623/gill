import TypedArray from "lib/gill/webgl/typed-array.type";

interface GillTypedArrayFactory
{
  construct(
    arrayData:  Array<number>
  ): TypedArray;
}

export default GillTypedArrayFactory;
