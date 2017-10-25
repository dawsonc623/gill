import GillBuffer from "lib/gill/buffer.type";
import GillModel  from "lib/gill/model.type";

interface GillBufferService
{
  getModelBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer;
}

export default GillBufferService;
