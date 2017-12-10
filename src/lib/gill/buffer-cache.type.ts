import GillBuffer from "lib/gill/buffer.type";
import Model  from "lib/gill/model.type";

interface GillBufferCache
{
  cacheBuffer(
    gillModel             : Model,
    gillBuffer            : GillBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void;

  getBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer;

  hasBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): boolean;
}

export default GillBufferCache;
