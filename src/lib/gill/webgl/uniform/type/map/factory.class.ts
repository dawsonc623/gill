import GillWebglUniformTypeMap          from "lib/gill/webgl/uniform/type/map.type";
import GillWebglUniformTypeMapFactory   from "lib/gill/webgl/uniform/type/map/factory.type";
import StandardGillWebglUniformTypeMap  from "lib/gill/webgl/uniform/type/map.class";

class StandardGillWebglUniformTypeMapFactory implements GillWebglUniformTypeMapFactory
{
  construct(): GillWebglUniformTypeMap
  {
    return  new StandardGillWebglUniformTypeMap();
  }
}

export default StandardGillWebglUniformTypeMapFactory;
