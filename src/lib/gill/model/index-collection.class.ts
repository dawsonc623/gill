import GillIndexCollection  from "lib/gill/model/index-collection.type";

class StandardGillIndexCollection implements GillIndexCollection
{
  private indices : Array<number>;

  constructor()
  {
    this.indices = new Array<number>();
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

  indexCount(): number
  {
    return  this.indices.length;
  }

  toArray(): Array<number>
  {
    //TODO Should this be immutable?
    return  this.indices;
  }
}

export default StandardGillIndexCollection;
