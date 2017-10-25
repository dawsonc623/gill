interface GillBuffer
{
  hasAttributeBuffer(
    attributeName : string
  ): boolean;

  getAttributeBuffer(
    attributeName : string
  ): WebGLBuffer;

  getIndexBuffer(): WebGLBuffer;

  setAttributeBuffer(
    attributeName : string,
    webglBuffer   : WebGLBuffer
  ): void;
}

export default GillBuffer;
