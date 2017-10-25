import GillModel  from "lib/gill/model.type";

interface GillModelBufferService
{
  getModelAttributeBuffer(
    gillModel             : GillModel,
    attributeName         : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;

  getModelIndexBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;
}

export default GillModelBufferService;
