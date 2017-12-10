import GillAttributeBufferMapFactory  from "lib/gill/attribute-buffer-map/factory.type";
import GillBuffer                     from "lib/gill/buffer.type";
import GillBufferCache                from "lib/gill/buffer-cache.type";
import GillBufferFactory              from "lib/gill/buffer/factory.type";
import GillBufferService              from "lib/gill/buffer/service.type";
import Model                          from "lib/gill/model.type";

class StandardGillBufferService implements GillBufferService
{
  constructor(
    private gillAttributeBufferMapFactory : GillAttributeBufferMapFactory,
    private gillBufferCache               : GillBufferCache,
    private gillBufferFactory             : GillBufferFactory
  ) {

  }

  getModelBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer
  {
    const gillBufferExists  = this.gillBufferCache.hasBuffer(
                                gillModel,
                                webglRenderingContext
                              );

    let gillBuffer;

    if (gillBufferExists)
    {
      gillBuffer  = this.gillBufferCache.getBuffer(
                      gillModel,
                      webglRenderingContext
                    );
    }
    else
    {
      gillBuffer  = this.gillBufferFactory.construct(
                      this.gillAttributeBufferMapFactory.construct(),
                      webglRenderingContext.createBuffer()
                    );

      this.gillBufferCache.cacheBuffer(
        gillModel,
        gillBuffer,
        webglRenderingContext
      );
    }

    return gillBuffer;
  }
}

export default StandardGillBufferService;
