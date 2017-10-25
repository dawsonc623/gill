import GillUniformTypeMap         from "lib/gill/webgl/uniform/type/map.type";
import GillUniformTypeMapFactory  from "lib/gill/webgl/uniform/type/map/factory.type";
import StandardGillUniformTypeMap from "lib/gill/webgl/uniform/type/map.class";

class StandardGillUniformTypeMapFactory implements GillUniformTypeMapFactory
{
  construct(): GillUniformTypeMap
  {
    return  new StandardGillUniformTypeMap();
  }
}

export default StandardGillUniformTypeMapFactory;
