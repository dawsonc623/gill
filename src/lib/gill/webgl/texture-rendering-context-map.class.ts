import WebglTextureRenderingContextMap from "lib/gill/webgl/texture-rendering-context-map.type";

class StandardWebglTextureRenderingContextMap implements WebglTextureRenderingContextMap
{
  private webglRenderingContexts  : Map<
                                      WebGLTexture,
                                      WebGLRenderingContext
                                    >;

  constructor()
  {
    this.webglRenderingContexts = new Map<
                                    WebGLTexture,
                                    WebGLRenderingContext
                                  >();
  }

  eachWebglRenderingContext(
    action  : (
      webglTexture          : WebGLTexture,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void
  {
    for (
      let [
        webglTexture,
        webglRenderingContext
      ]
      of this.webglRenderingContexts
    ) {
      action(
        webglTexture,
        webglRenderingContext
      );
    }
  }

  hasWebglRenderingContext(
    webglTexture  : WebGLTexture
  ): boolean
  {
    return  this.webglRenderingContexts.has(
              webglTexture
            );
  }

  getWebglRenderingContext(
    webglTexture  : WebGLTexture
  ): WebGLRenderingContext
  {
    return  this.webglRenderingContexts.get(
              webglTexture
            );
  }

  setWebglRenderingContext(
    webglTexture          : WebGLTexture,
    webglRenderingContext : WebGLRenderingContext
  ): void
  {
    this.webglRenderingContexts.set(
      webglTexture,
      webglRenderingContext
    );
  }
}

export default StandardWebglTextureRenderingContextMap;
