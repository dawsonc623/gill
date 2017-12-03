interface WebglTextureRenderingContextMap
{
  eachWebglRenderingContext(
    action  : (
      webglTexture           : WebGLTexture,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void;

  hasWebglRenderingContext(
    webglTexture  : WebGLTexture,
  ): boolean;

  getWebglRenderingContext(
    webglTexture  : WebGLTexture,
  ): WebGLRenderingContext;

  setWebglRenderingContext(
    webglTexture          : WebGLTexture,
    webglRenderingContext : WebGLRenderingContext
  ): void;
}

export default WebglTextureRenderingContextMap;
