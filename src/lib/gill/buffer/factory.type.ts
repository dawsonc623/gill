import GillAttributeBufferMap from "lib/gill/attribute-buffer-map.type";
import GillBuffer             from "lib/gill/buffer.type";

interface GillBufferFactory
{
  construct(
    gillAttributeBuffers  : GillAttributeBufferMap,
    webglIndexBuffer      : WebGLBuffer
  ): GillBuffer;
}

export default GillBufferFactory;
