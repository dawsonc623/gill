interface WebglService
{
  createWebglBuffer(
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;

  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  createWebglTexture(
    webglRenderingContext : WebGLRenderingContext
  ): WebGLTexture;

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;

  getWebglContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext;
}

export default WebglService;
