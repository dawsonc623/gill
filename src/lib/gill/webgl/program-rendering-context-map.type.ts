interface WebglProgramRenderingContextMap
{
  eachWebglRenderingContext(
    action  : (
      webglProgram          : WebGLProgram,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void;

  hasWebglRenderingContext(
    webglProgram : WebGLProgram,
  ): boolean;

  getWebglRenderingContext(
    webglProgram : WebGLProgram,
  ): WebGLRenderingContext;

  setWebglRenderingContext(
    webglProgram          : WebGLProgram,
    webglRenderingContext : WebGLRenderingContext
  ): void;
}

export default WebglProgramRenderingContextMap;
