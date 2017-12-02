import VariableTypeMap         from "lib/gill/program/variable/type-map.type";
import VariableTypeMapFactory  from "lib/gill/program/variable/type-map/factory.type";
import StandardVariableTypeMap from "lib/gill/program/variable/type-map.class";

class StandardVariableTypeMapFactory implements VariableTypeMapFactory
{
  construct(): VariableTypeMap
  {
    return  new StandardVariableTypeMap();
  }
}

export default StandardVariableTypeMapFactory;
