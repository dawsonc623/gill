import GillWebglVariableTypeMap         from "lib/gill/webgl/variable/type-map.type";
import GillWebglVariableTypeMapFactory  from "lib/gill/webgl/variable/type-map/factory.type";
import StandardGillWebglVariableTypeMap from "lib/gill/webgl/variable/type-map.class";

class StandardGillWebglVariableTypeMapFactory implements GillWebglVariableTypeMapFactory
{
  construct(): GillWebglVariableTypeMap
  {
    return  new StandardGillWebglVariableTypeMap();
  }
}

export default StandardGillWebglVariableTypeMapFactory;
