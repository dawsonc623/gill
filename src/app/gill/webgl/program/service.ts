import gillWebglAttributeFactory      from "app/gill/webgl/attribute/factory";
import gillWebglAttributeTypeFactory  from "app/gill/webgl/attribute/type/factory";
import gillWebglAttributeTypeMap      from "app/gill/webgl/attribute/type/map";
import gillWebglProgramFactory        from "app/gill/webgl/program/factory";
import gillWebglProgramServiceFactory from "app/gill/webgl/program/service/factory";
import gillWebglUniformFactory        from "app/gill/webgl/uniform/factory";
import gillWebglUniformTypeFactory    from "app/gill/webgl/uniform/type/factory";
import gillWebglUniformTypeMap        from "app/gill/webgl/uniform/type/map";

const gillWebglProgramService = gillWebglProgramServiceFactory.construct(
                                  gillWebglAttributeFactory,
                                  gillWebglAttributeTypeFactory,
                                  gillWebglAttributeTypeMap,
                                  gillWebglProgramFactory,
                                  gillWebglUniformFactory,
                                  gillWebglUniformTypeFactory,
                                  gillWebglUniformTypeMap
                                );

export default gillWebglProgramService;
