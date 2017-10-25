import GillBuffer                 from "lib/gill/buffer.type";
import GillBufferCache            from "lib/gill/buffer-cache.type";
import GillContextModelsMap       from "lib/gill/context-models-map.type";
import GillModel                  from "lib/gill/model.type";
import GillModelBufferMapFactory  from "lib/gill/model-buffer-map/factory.type";

class StandardGillBufferCache implements GillBufferCache
{
  constructor(
    private gillContextModels         : GillContextModelsMap,
    private gillModelBufferMapFactory : GillModelBufferMapFactory
  ) {

  }

  cacheBuffer(
    gillModel             : GillModel,
    gillBuffer            : GillBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void
  {
    let gillModelBuffers  = this.gillContextModels.getModelBuffers(
                              webglRenderingContext
                            );

    if (gillModelBuffers === undefined)
    {
      gillModelBuffers  = this.gillModelBufferMapFactory.construct();

      this.gillContextModels.setModelBuffers(
                                webglRenderingContext,
                                gillModelBuffers
                              );
    }

    gillModelBuffers.setBuffer(
      gillModel,
      gillBuffer
    );
  }

  getBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer
  {
    let gillModelBuffers  = this.gillContextModels.getModelBuffers(
                              webglRenderingContext
                            );

    let buffer;

    if (gillModelBuffers !== undefined)
    {
      buffer  = gillModelBuffers.getBuffer(
                  gillModel
                );
    }

    if (buffer === undefined)
    {
      throw new Error(
              "No such cached buffer"
            );
    }

    return  buffer;
  }

  hasBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): boolean
  {
    const hasGillModelBuffers = this.gillContextModels.getModelBuffers(
                                  webglRenderingContext
                                );

    let gillModelBuffers  = undefined,
        hasBuffer         = false;

    if (hasGillModelBuffers)
    {
      gillModelBuffers  = this.gillContextModels.getModelBuffers(
                                    webglRenderingContext
                                  );

      hasBuffer = gillModelBuffers.hasBuffer(
                    gillModel
                  );
    }

    return  hasBuffer;
  }
}

export default StandardGillBufferCache;
