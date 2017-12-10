interface WebglShaderFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    shaderSource          : string,
    shaderType            : number
  ): WebGLShader;
}

export default WebglShaderFactory;
