interface IndexData
{
  addIndex(
    index : number
  ): void;

  eachIndex(
    action : (
      index : number
    ) => void
  ): void;

  getData(): Array<number>;

  indexCount(): number;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;
}

export default IndexData;
