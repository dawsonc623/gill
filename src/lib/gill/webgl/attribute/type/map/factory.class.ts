import GillWebglAttributeTypeMap          from "lib/gill/webgl/attribute/type/map.type";
import GillWebglAttributeTypeMapFactory   from "lib/gill/webgl/attribute/type/map/factory.type";
import StandardGillWebglAttributeTypeMap  from "lib/gill/webgl/attribute/type/map.class";

class StandardGillWebglAttributeTypeMapFactory implements GillWebglAttributeTypeMapFactory
{
  construct(): GillWebglAttributeTypeMap
  {
    return  new StandardGillWebglAttributeTypeMap();
  }
}

export default StandardGillWebglAttributeTypeMapFactory;
