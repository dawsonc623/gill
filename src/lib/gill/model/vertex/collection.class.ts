import GillVertex           from "lib/gill/model/vertex.type";
import GillVertexCollection from "lib/gill/model/vertex/collection.type";

class StandardGillVertexCollection implements GillVertexCollection
{
  private vertices  : Array<GillVertex>;

  constructor()
  {
    this.vertices = new Array<GillVertex>();
  }

  addVertex(
    vertex  : GillVertex
  ): void
  {
    this.vertices.push(
      vertex
    );
  }

  eachVertex(
    action  : (
      vertex  : GillVertex
    ) => void
  ): void
  {
    for (
      let vertex of this.vertices
    ) {
      action(
        vertex
      );
    }
  }
}

export default StandardGillVertexCollection;

