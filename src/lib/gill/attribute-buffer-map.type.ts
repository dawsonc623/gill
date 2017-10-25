interface GillAttributeBufferMap
{
  eachAttributeBuffer(
    action  : (
      attributeName : string,
      webglBuffer   : WebGLBuffer
    ) => void
  ): void;

  hasAttributeBuffer(
    attributeName : string,
  ): boolean;

  getAttributeBuffer(
    attributeName : string,
  ): WebGLBuffer;

  setAttributeBuffer(
    attributeName : string,
    webglBuffer   : WebGLBuffer
  ): void;
}

export default GillAttributeBufferMap;
