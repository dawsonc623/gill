interface GillProgramWebglService
{
  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;
}

export default GillProgramWebglService;
