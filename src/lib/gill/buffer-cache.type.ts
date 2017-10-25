import GillBuffer from "lib/gill/buffer.type";
import GillModel  from "lib/gill/model.type";

interface GillBufferCache
{
  cacheBuffer(
    gillModel             : GillModel,
    gillBuffer            : GillBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void;

  getBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer;

  hasBuffer(
    gillModel             : GillModel,
    webglRenderingContext : WebGLRenderingContext
  ): boolean;
}

export default GillBufferCache;
