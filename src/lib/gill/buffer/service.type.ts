import GillBuffer from "lib/gill/buffer.type";
import Model      from "lib/gill/model.type";

interface GillBufferService
{
  getModelBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer;
}

export default GillBufferService;
