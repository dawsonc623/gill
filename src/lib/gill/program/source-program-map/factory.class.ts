import GillProgramMap               from "lib/gill/program/source-program-map.type";
import GillSourceProgramMapFactory  from "lib/gill/program/source-program-map/factory.type";
import StandardSourceGillProgramMap from "lib/gill/program/source-program-map.class";

class StandardGillProgramMapFactory implements GillSourceProgramMapFactory
{
  construct(): GillProgramMap
  {
    return  new StandardSourceGillProgramMap();
  }
}

export default StandardGillProgramMapFactory;
