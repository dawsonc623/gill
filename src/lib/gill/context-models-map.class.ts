import GillContextModelsMap from "lib/gill/context-models-map.type";
import GillModelBufferMap   from "lib/gill/model-buffer-map.type";

class StandardGillContextModelsMap implements GillContextModelsMap
{
  private gillModelBuffers : Map<WebGLRenderingContext, GillModelBufferMap>;

  constructor()
  {
    this.gillModelBuffers = new Map<WebGLRenderingContext, GillModelBufferMap>();
  }

  eachModelBuffers(
    action  : (
      webglRenderingContext : WebGLRenderingContext,
      gillModelBuffers      : GillModelBufferMap
    ) => void
  ): void
  {
    for (
      let [
        webglRenderingContext,
        gillModelBuffers
      ]
      of this.gillModelBuffers
    ) {
      action(
        webglRenderingContext,
        gillModelBuffers
      );
    }
  }

  hasModelBuffers(
    webglRenderingContext : WebGLRenderingContext
  ): boolean
  {
    return  this.gillModelBuffers.has(
              webglRenderingContext
            );
  }

  getModelBuffers(
    webglRenderingContext : WebGLRenderingContext
  ): GillModelBufferMap
  {
    return  this.gillModelBuffers.get(
              webglRenderingContext
            );
  }

  setModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
    gillModelBuffers      : GillModelBufferMap
  ): void
  {
    this.gillModelBuffers.set(
      webglRenderingContext,
      gillModelBuffers
    );
  }
}

export default StandardGillContextModelsMap;
