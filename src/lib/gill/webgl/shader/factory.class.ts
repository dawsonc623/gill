import WebglShaderFactory from "lib/gill/webgl/shader/factory.type";

class StandardWebglShaderFactory implements WebglShaderFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    shaderSource          : string,
    shaderType            : number
  ): WebGLShader
  {
    const shader  = webglRenderingContext.createShader(
                      shaderType
                    );

    webglRenderingContext.shaderSource(
      shader,
      shaderSource
    );

    webglRenderingContext.compileShader(
      shader
    );

    const compiledSuccessfully  = webglRenderingContext.getShaderParameter(
                                    shader,
                                    webglRenderingContext.COMPILE_STATUS
                                  );

    if (!compiledSuccessfully)
    {
      const errorMessage  = webglRenderingContext.getShaderInfoLog(
                              shader
                            ),
            shaderName    = shaderType === webglRenderingContext.FRAGMENT_SHADER ?
                              "fragment" :
                              "vertex";

      webglRenderingContext.deleteShader(
        shader
      );

      throw new Error(
              `An error occurred compiling the ${shaderName} shader: ${errorMessage}`
            );
    }

    return shader;
  }
}

export default StandardWebglShaderFactory;
