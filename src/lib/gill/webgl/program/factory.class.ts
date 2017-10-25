import GillWebglProgramFactory  from "lib/gill/webgl/program/factory.type";
import GillWebglShaderFactory   from "lib/gill/webgl/shader/factory.type";

class StandardGillWebglProgramFactory implements GillWebglProgramFactory
{
  constructor(
    private webglShaderFactory  : GillWebglShaderFactory
  ) {

  }

  construct(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    const webglProgram    = webglRenderingContext.createProgram();

    const fragmentShader  = this.webglShaderFactory.construct(
            fragmentShaderSource,
            webglRenderingContext.FRAGMENT_SHADER,
            webglRenderingContext
          ),
          vertexShader    = this.webglShaderFactory.construct(
            vertexShaderSource,
            webglRenderingContext.VERTEX_SHADER,
            webglRenderingContext
          );

    webglRenderingContext.attachShader(webglProgram, vertexShader);
    webglRenderingContext.attachShader(webglProgram, fragmentShader);

    webglRenderingContext.linkProgram(webglProgram);

    if (!webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS))
    {
      throw "Unable to initialize the WebGL program: " + webglRenderingContext.getProgramInfoLog(webglProgram);
    }

    return webglProgram;
  }
}

export default StandardGillWebglProgramFactory;
