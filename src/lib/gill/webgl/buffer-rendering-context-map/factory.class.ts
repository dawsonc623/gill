import GillWebglBufferRenderingContextMap         from "lib/gill/webgl/buffer-rendering-context-map.type";
import GillWebglBufferRenderingContextMapFactory  from "lib/gill/webgl/buffer-rendering-context-map/factory.type";
import StandardGillWebglBufferRenderingContextMap from "lib/gill/webgl/buffer-rendering-context-map.class";

class StandardGillWebglBufferRenderingContextMapFactory implements GillWebglBufferRenderingContextMapFactory
{
  construct(): GillWebglBufferRenderingContextMap
  {
    return  new StandardGillWebglBufferRenderingContextMap();
  }
}

export default StandardGillWebglBufferRenderingContextMapFactory;
