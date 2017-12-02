import WebglRenderingContextRepository  from "lib/gill/webgl/rendering-context-repository.type";

class StandardWebglRenderingContextRepository implements WebglRenderingContextRepository
{
  getWebglRenderingContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext
  {
    let webglRenderingContext = canvas.getContext(
                                  "webgl"
                                );

    if (webglRenderingContext === null)
    {
      webglRenderingContext = canvas.getContext(
                                "experimental-webgl"
                              );
    }

    return  webglRenderingContext;
  }
}

export default StandardWebglRenderingContextRepository;
