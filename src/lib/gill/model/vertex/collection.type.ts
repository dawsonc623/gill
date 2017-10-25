import GillVertex from "lib/gill/model/vertex.type";

interface GillVertexCollection
{
  addVertex(
    vertex  : GillVertex
  ): void;

  eachVertex(
    action  : (
      vertex  : GillVertex
    ) => void
  ): void;
}

export default GillVertexCollection;

