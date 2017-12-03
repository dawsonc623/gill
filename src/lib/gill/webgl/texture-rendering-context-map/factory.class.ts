import WebglTextureRenderingContextMap         from "lib/gill/webgl/texture-rendering-context-map.type";
import WebglTextureRenderingContextMapFactory  from "lib/gill/webgl/texture-rendering-context-map/factory.type";
import StandardWebglTextureRenderingContextMap from "lib/gill/webgl/texture-rendering-context-map.class";

class StandardWebglTextureRenderingContextMapFactory implements WebglTextureRenderingContextMapFactory
{
  construct(): WebglTextureRenderingContextMap
  {
    return  new StandardWebglTextureRenderingContextMap();
  }
}

export default StandardWebglTextureRenderingContextMapFactory;
