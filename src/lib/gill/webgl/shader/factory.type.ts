interface GillWebglShaderFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    shaderSource          : string,
    shaderType            : number
  ): WebGLShader;
}

export default GillWebglShaderFactory;
