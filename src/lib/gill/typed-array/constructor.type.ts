import TypedArray from "lib/gill/typed-array.type";

interface TypedArrayConstructor
{
  readonly prototype: TypedArray;

  new(length: number): TypedArray;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): TypedArray;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): TypedArray;

  /**
    * The size in bytes of each element in the array.
    */
  readonly BYTES_PER_ELEMENT: number;

  /**
    * Returns a new array from a set of elements.
    * @param items A set of elements to include in the new array object.
    */
  of(...items: number[]): TypedArray;

  /**
    * Creates an array from an array-like or iterable object.
    * @param arrayLike An array-like or iterable object to convert to an array.
    * @param mapfn A mapping function to call on every element of the array.
    * @param thisArg Value of 'this' used to invoke the mapfn.
    */
  from(arrayLike: ArrayLike<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): TypedArray;
}

export default TypedArrayConstructor;
