import WebglProgramRenderingContextMap          from "lib/gill/webgl/program-rendering-context-map.type";
import WebglProgramRenderingContextMapFactory   from "lib/gill/webgl/program-rendering-context-map/factory.type";
import StandardWebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.class";

class StandardWebglProgramRenderingContextMapFactory implements WebglProgramRenderingContextMapFactory
{
  construct(): WebglProgramRenderingContextMap
  {
    return  new StandardWebglProgramRenderingContextMap();
  }
}

export default StandardWebglProgramRenderingContextMapFactory;
