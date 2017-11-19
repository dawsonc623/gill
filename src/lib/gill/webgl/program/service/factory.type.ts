import GillWebglAttributeFactory      from "lib/gill/webgl/attribute/factory.type";
import GillWebglAttributeTypeFactory  from "lib/gill/webgl/attribute/type/factory.type";
import GillWebglAttributeTypeMap      from "lib/gill/webgl/attribute/type/map.type";
import GillWebglProgramFactory        from "lib/gill/webgl/program/factory.type";
import GillWebglProgramService        from "lib/gill/webgl/program/service.type";
import GillWebglUniformFactory        from "lib/gill/webgl/uniform/factory.type";
import GillWebglUniformTypeFactory    from "lib/gill/webgl/uniform/type/factory.type";
import GillWebglUniformTypeMap        from "lib/gill/webgl/uniform/type/map.type";

interface GillWebglProgramServiceFactory
{
  construct(
    gillWebglAttributeFactory     : GillWebglAttributeFactory,
    gillWebglAttributeTypeMap     : GillWebglAttributeTypeMap,
    gillWebglProgramFactory       : GillWebglProgramFactory,
    gillWebglUniformFactory       : GillWebglUniformFactory,
    gillWebglUniformTypeMap       : GillWebglUniformTypeMap
  ): GillWebglProgramService;
}

export default GillWebglProgramServiceFactory;
