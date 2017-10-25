import GillWebglShaderFactory from "lib/gill/webgl/shader/factory.type";

class StandardGillWebglShaderFactory implements GillWebglShaderFactory
{
  construct(
    shaderSource          : string,
    shaderType            : number,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLShader
  {
    const shader  = webglRenderingContext.createShader(shaderType);

    webglRenderingContext.shaderSource(shader, shaderSource);

    webglRenderingContext.compileShader(shader);

    if (!webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS))
    {
      const log         = webglRenderingContext.getShaderInfoLog(shader),
            shaderName  = shaderType == webglRenderingContext.FRAGMENT_SHADER ? "fragment" : "vertex";

      webglRenderingContext.deleteShader(shader);

      throw `An error occurred compiling the ${shaderName} shader: ${log}`;
    }

    return shader;
  }
}

export default StandardGillWebglShaderFactory;
