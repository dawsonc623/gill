interface GillWebglShaderFactory
{
  construct(
    shaderSource          : string,
    shaderType            : number,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLShader;
}

export default GillWebglShaderFactory;
