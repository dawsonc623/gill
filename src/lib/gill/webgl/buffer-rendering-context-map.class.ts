import WebglBufferRenderingContextMap from "lib/gill/webgl/buffer-rendering-context-map.type";

class StandardWebglBufferRenderingContextMap implements WebglBufferRenderingContextMap
{
  private webglRenderingContexts  : Map<
                                      WebGLBuffer,
                                      WebGLRenderingContext
                                    >;

  constructor()
  {
    this.webglRenderingContexts = new Map<
                                    WebGLBuffer,
                                    WebGLRenderingContext
                                  >();
  }

  eachWebglRenderingContext(
    action  : (
      webglBuffer           : WebGLBuffer,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void
  {
    for (
      let [
        webglBuffer,
        webglRenderingContext
      ]
      of this.webglRenderingContexts
    ) {
      action(
        webglBuffer,
        webglRenderingContext
      );
    }
  }

  hasWebglRenderingContext(
    webglBuffer : WebGLBuffer
  ): boolean
  {
    return  this.webglRenderingContexts.has(
              webglBuffer
            );
  }

  getWebglRenderingContext(
    webglBuffer : WebGLBuffer
  ): WebGLRenderingContext
  {
    return  this.webglRenderingContexts.get(
              webglBuffer
            );
  }

  setWebglRenderingContext(
    webglBuffer           : WebGLBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void
  {
    this.webglRenderingContexts.set(
      webglBuffer,
      webglRenderingContext
    );
  }
}

export default StandardWebglBufferRenderingContextMap;
