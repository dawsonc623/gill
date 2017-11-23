import GillWebglProgramRenderingContextMap          from "lib/gill/webgl/program-rendering-context-map.type";
import GillWebglProgramRenderingContextMapFactory   from "lib/gill/webgl/program-rendering-context-map/factory.type";
import StandardGillWebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.class";

class StandardGillWebglProgramRenderingContextMapFactory implements GillWebglProgramRenderingContextMapFactory
{
  construct(): GillWebglProgramRenderingContextMap
  {
    return  new StandardGillWebglProgramRenderingContextMap();
  }
}

export default StandardGillWebglProgramRenderingContextMapFactory;
