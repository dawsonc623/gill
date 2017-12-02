import WebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.type";

class StandardWebglProgramRenderingContextMap implements WebglProgramRenderingContextMap
{
  private webglRenderingContexts  : Map<
                                      WebGLProgram,
                                      WebGLRenderingContext
                                    >;

  constructor()
  {
    this.webglRenderingContexts = new Map<
                                    WebGLProgram,
                                    WebGLRenderingContext
                                  >();
  }

  eachWebglRenderingContext(
    action  : (
      webglProgram          : WebGLProgram,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void
  {
    for (
      let [
        webglProgram,
        webglRenderingContext
      ]
      of this.webglRenderingContexts
    ) {
      action(
        webglProgram,
        webglRenderingContext
      );
    }
  }

  hasWebglRenderingContext(
    webglProgram : WebGLProgram
  ): boolean
  {
    return  this.webglRenderingContexts.has(
              webglProgram
            );
  }

  getWebglRenderingContext(
    webglProgram : WebGLProgram
  ): WebGLRenderingContext
  {
    return  this.webglRenderingContexts.get(
              webglProgram
            );
  }

  setWebglRenderingContext(
    webglProgram          : WebGLProgram,
    webglRenderingContext : WebGLRenderingContext
  ): void
  {
    this.webglRenderingContexts.set(
      webglProgram,
      webglRenderingContext
    );
  }
}

export default StandardWebglProgramRenderingContextMap;
