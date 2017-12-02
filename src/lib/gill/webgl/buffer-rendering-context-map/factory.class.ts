import WebglBufferRenderingContextMap         from "lib/gill/webgl/buffer-rendering-context-map.type";
import WebglBufferRenderingContextMapFactory  from "lib/gill/webgl/buffer-rendering-context-map/factory.type";
import StandardWebglBufferRenderingContextMap from "lib/gill/webgl/buffer-rendering-context-map.class";

class StandardWebglBufferRenderingContextMapFactory implements WebglBufferRenderingContextMapFactory
{
  construct(): WebglBufferRenderingContextMap
  {
    return  new StandardWebglBufferRenderingContextMap();
  }
}

export default StandardWebglBufferRenderingContextMapFactory;
