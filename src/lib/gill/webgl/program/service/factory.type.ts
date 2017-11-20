import GillWebglAttributeFactory      from "lib/gill/webgl/attribute/factory.type";
import GillWebglProgramFactory        from "lib/gill/webgl/program/factory.type";
import GillWebglProgramService        from "lib/gill/webgl/program/service.type";
import GillWebglUniformFactory        from "lib/gill/webgl/uniform/factory.type";
import GillWebglVariableTypeMap       from "lib/gill/webgl/variable/type-map.type";

interface GillWebglProgramServiceFactory
{
  construct(
    gillWebglAttributeFactory     : GillWebglAttributeFactory,
    gillWebglProgramFactory       : GillWebglProgramFactory,
    gillWebglUniformFactory       : GillWebglUniformFactory,
    gillWebglVariableTypeMap      : GillWebglVariableTypeMap
  ): GillWebglProgramService;
}

export default GillWebglProgramServiceFactory;
