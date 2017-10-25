import GillAttributeBufferMap from "lib/gill/attribute-buffer-map.type";
import GillBuffer             from "lib/gill/buffer.type";
import GillBufferFactory      from "lib/gill/buffer/factory.type";
import StandardGillBuffer     from "lib/gill/buffer.class";

class StandardGillBufferFactory implements GillBufferFactory
{
  construct(
    gillAttributeBuffers  : GillAttributeBufferMap,
    webglIndexBuffer      : WebGLBuffer
  ): GillBuffer
  {
    return  new StandardGillBuffer(
              gillAttributeBuffers,
              webglIndexBuffer
            );
  }
}

export default StandardGillBufferFactory;
