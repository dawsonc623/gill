import WebglProgramFactory  from "lib/gill/webgl/program/factory.type";

class StandardWebglProgramFactory implements WebglProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    vertexShader          : WebGLShader,
    fragmentShader        : WebGLShader
  ): WebGLProgram
  {
    const webglProgram    = webglRenderingContext.createProgram();

    webglRenderingContext.attachShader(
      webglProgram,
      vertexShader
    );

    webglRenderingContext.attachShader(
      webglProgram,
      fragmentShader
    );

    webglRenderingContext.linkProgram(
      webglProgram
    );

    const linkedSuccessfully  = webglRenderingContext.getProgramParameter(
                                  webglProgram,
                                  webglRenderingContext.LINK_STATUS
                                );

    if (!linkedSuccessfully)
    {
      const errorMessage  = webglRenderingContext.getProgramInfoLog(
                              webglProgram
                            );
      throw new Error(
              `Unable to initialize the WebGL program: ${errorMessage}`
            );
    }

    return webglProgram;
  }
}

export default StandardWebglProgramFactory;
