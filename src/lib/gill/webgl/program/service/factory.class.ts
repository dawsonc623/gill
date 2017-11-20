import GillWebglAttributeFactory        from "lib/gill/webgl/attribute/factory.type";
import GillWebglProgramFactory          from "lib/gill/webgl/program/factory.type";
import GillWebglProgramService          from "lib/gill/webgl/program/service.type";
import GillWebglProgramServiceFactory   from "lib/gill/webgl/program/service/factory.type";
import GillWebglUniformFactory          from "lib/gill/webgl/uniform/factory.type";
import GillWebglVariableTypeMap         from "lib/gill/webgl/variable/type-map.type";
import StandardGillWebglProgramService  from "lib/gill/webgl/program/service.class";

class StandardGillWebglProgramServiceFactory implements GillWebglProgramServiceFactory
{
  construct(
    gillWebglAttributeFactory     : GillWebglAttributeFactory,
    gillWebglProgramFactory       : GillWebglProgramFactory,
    gillWebglUniformFactory       : GillWebglUniformFactory,
    gillWebglVariableTypeMap      : GillWebglVariableTypeMap
  ): GillWebglProgramService
  {
    return  new StandardGillWebglProgramService(
              gillWebglAttributeFactory,
              gillWebglProgramFactory,
              gillWebglUniformFactory,
              gillWebglVariableTypeMap
            );
  }
}

export default StandardGillWebglProgramServiceFactory;
