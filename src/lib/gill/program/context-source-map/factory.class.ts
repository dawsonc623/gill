import GillContextSourceMap         from "lib/gill/program/context-source-map.type";
import GillContextSourceMapFactory  from "lib/gill/program/context-source-map/factory.type";
import StandardGillContextSourceMap from "lib/gill/program/context-source-map.class";

class StandardGillContextSourceMapFactory implements GillContextSourceMapFactory
{
  construct(): GillContextSourceMap
  {
    return  new StandardGillContextSourceMap();
  }
}

export default StandardGillContextSourceMapFactory;
