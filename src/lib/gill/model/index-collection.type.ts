interface GillIndexCollection
{
  addIndex(
    index : number
  ): void;

  eachIndex(
    action : (
      index : number
    ) => void
  ): void;

  indexCount(): number;

  toArray(): Array<number>;
}

export default GillIndexCollection;
