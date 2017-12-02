interface WebglProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    vertexShader          : WebGLShader,
    fragmentShader        : WebGLShader
  ): WebGLProgram;
}

export default WebglProgramFactory;
