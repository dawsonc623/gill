import GillUniformValueMap          from "lib/gill/model/uniform-value-map.type";
import GillUniformValueMapFactory   from "lib/gill/model/uniform-value-map/factory.type";
import StandardGillUniformValueMap  from "lib/gill/model/uniform-value-map.class";

class StandardGillUniformValueMapFactory implements GillUniformValueMapFactory
{
  construct(): GillUniformValueMap
  {
    return  new StandardGillUniformValueMap();
  }
}

export default StandardGillUniformValueMapFactory;
