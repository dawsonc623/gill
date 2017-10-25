import GillAttribufeBufferMap from "lib/gill/attribute-buffer-map.type";

class StandardGillAttribufeBufferMap implements GillAttribufeBufferMap
{
  private buffers : Map<string, WebGLBuffer>;

  constructor()
  {
    this.buffers = new Map<string, WebGLBuffer>();
  }

  eachAttributeBuffer(
    action  : (
      attributeName : string,
      webglBuffer   : WebGLBuffer
    ) => void
  ): void
  {
    for (
      let [
        attributeName,
        webglBuffer
      ]
      of this.buffers
    ) {
      action(
        attributeName,
        webglBuffer
      );
    }
  }

  hasAttributeBuffer(
    attributeName : string
  ): boolean
  {
    return  this.buffers.has(
              attributeName
            );
  }

  getAttributeBuffer(
    attributeName : string
  ): WebGLBuffer
  {
    return  this.buffers.get(
              attributeName
            );
  }

  setAttributeBuffer(
    attributeName : string,
    webglBuffer   : WebGLBuffer
  ): void
  {
    this.buffers.set(
      attributeName,
      webglBuffer
    );
  }
}

export default StandardGillAttribufeBufferMap;
