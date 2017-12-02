interface WebglBufferRenderingContextMap
{
  eachWebglRenderingContext(
    action  : (
      webglBuffer           : WebGLBuffer,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void;

  hasWebglRenderingContext(
    webglBuffer : WebGLBuffer,
  ): boolean;

  getWebglRenderingContext(
    webglBuffer : WebGLBuffer,
  ): WebGLRenderingContext;

  setWebglRenderingContext(
    webglBuffer           : WebGLBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void;
}

export default WebglBufferRenderingContextMap;
