import IndexData  from "lib/gill/model/index-collection.type";

class StandardIndexData implements IndexData
{
  private hasChanged  : boolean;
  private indices     : Array<number>;

  constructor()
  {
    this.hasChanged = true;
    this.indices    = new Array<number>();
  }

  addIndex(
    index : number
  ): void
  {
    this.indices.push(
      index
    );
  }

  eachIndex(
    action : (
      index : number
    ) => void
  ): void
  {
    for (
      let index of this.indices
    )
    {
      action(
        index
      );
    }
  }

  getData(): Array<number>
  {
    return  this.indices;
  }

  indexCount(): number
  {
    return  this.indices.length;
  }

  needsBuffered(): boolean
  {
    return  this.hasChanged;
  }

  setNeedsBuffered(
    needsBuffered : boolean
  ): void
  {
    this.hasChanged = needsBuffered;
  }
}

export default StandardIndexData;
