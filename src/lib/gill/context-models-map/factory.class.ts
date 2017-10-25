import GillContextModelsMap         from "lib/gill/context-models-map.type";
import GillContextModelsMapFactory  from "lib/gill/context-models-map/factory.type";
import StandardGillContextModelsMap from "lib/gill/context-models-map.class";

class StandardGillContextModelsMapFactory implements GillContextModelsMapFactory
{
  construct(): GillContextModelsMap
  {
    return  new StandardGillContextModelsMap();
  }
}

export default StandardGillContextModelsMapFactory;
