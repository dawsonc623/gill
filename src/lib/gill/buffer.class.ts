import GillAttributeBufferMap from "lib/gill/attribute-buffer-map.type";
import GillBuffer             from "lib/gill/buffer.type";

class StandardGillBuffer implements GillBuffer
{
  constructor(
    private gillAttributeBuffers  : GillAttributeBufferMap,
    private webglIndexBuffer      : WebGLBuffer
  ) {

  }

  hasAttributeBuffer(
    attributeName : string
  ): boolean
  {
    return  this.gillAttributeBuffers.hasAttributeBuffer(
              attributeName
            );
  }

  getAttributeBuffer(
    attributeName : string
  ): WebGLBuffer
  {
    return  this.gillAttributeBuffers.getAttributeBuffer(
              attributeName
            );
  }

  getIndexBuffer(): WebGLBuffer
  {
    return  this.webglIndexBuffer;
  }

  setAttributeBuffer(
    attributeName : string,
    webglBuffer   : WebGLBuffer
  ): void
  {
    this.gillAttributeBuffers.setAttributeBuffer(
      attributeName,
      webglBuffer
    );
  }
}

export default StandardGillBuffer;
