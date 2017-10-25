import GillModelBufferMap from "lib/gill/model-buffer-map.type";

interface GillContextModelsMap
{
  eachModelBuffers(
    action  : (
      webglRenderingContext : WebGLRenderingContext,
      gillModelBuffers      : GillModelBufferMap
    ) => void
  ): void;

  hasModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
  ): boolean;

  getModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
  ): GillModelBufferMap;

  setModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
    gillModelBuffers      : GillModelBufferMap
  ): void;
}

export default GillContextModelsMap;
