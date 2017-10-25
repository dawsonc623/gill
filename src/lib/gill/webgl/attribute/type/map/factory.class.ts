import GillAttributeTypeMap         from "lib/gill/webgl/attribute/type/map.type";
import GillAttributeTypeMapFactory  from "lib/gill/webgl/attribute/type/map/factory.type";
import StandardGillAttributeTypeMap from "lib/gill/webgl/attribute/type/map.class";

class StandardGillAttributeTypeMapFactory implements GillAttributeTypeMapFactory
{
  construct(): GillAttributeTypeMap
  {
    return  new StandardGillAttributeTypeMap();
  }
}

export default StandardGillAttributeTypeMapFactory;
