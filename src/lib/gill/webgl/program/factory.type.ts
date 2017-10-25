interface GillWebglProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;
}

export default GillWebglProgramFactory;
