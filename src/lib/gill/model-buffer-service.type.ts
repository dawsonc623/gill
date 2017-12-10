import Model  from "lib/gill/model.type";

interface GillModelBufferService
{
  getModelAttributeBuffer(
    gillModel             : Model,
    attributeName         : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;

  getModelIndexBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;
}

export default GillModelBufferService;
