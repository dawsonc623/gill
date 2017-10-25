import GillBufferService      from "lib/gill/buffer/service.type";
import GillModel              from "lib/gill/model.type";
import GillModelBufferService from "lib/gill/model-buffer-service.type";

class StandardGillModelBufferService implements GillModelBufferService
{
  constructor(
    private gillBufferService : GillBufferService
  ) {

  }

  getModelAttributeBuffer(
    gillModel             : GillModel,
    attributeName         : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer
  {
    const gillBuffer  = this.gillBufferService.getModelBuffer(
                          gillModel,
                          webglRenderingContext
                        );

    const hasAttributeBuffer  = gillBuffer.hasAttributeBuffer(
                                  attributeName
                                );

    let attributeBuffer;

    if (hasAttributeBuffer)
    {
      attributeBuffer = gillBuffer.getAttributeBuffer(
                          attributeName
                        );
    }
    else
    {
      attributeBuffer = webglRenderingContext.createBuffer();

      gillBuffer.setAttributeBuffer(
        attributeName,
        attributeBuffer
      );
    }

    return  attributeBuffer;
  }

  getModelIndexBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer
  {
    const gillBuffer  = this.gillBufferService.getModelBuffer(
                          gillModel,
                          webglRenderingContext
                        );

    return gillBuffer.getIndexBuffer();
  }
}

export default StandardGillModelBufferService;
