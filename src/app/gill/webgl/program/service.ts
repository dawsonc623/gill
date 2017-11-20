import gillWebglAttributeFactory      from "app/gill/webgl/attribute/factory";
import gillWebglProgramFactory        from "app/gill/webgl/program/factory";
import gillWebglProgramServiceFactory from "app/gill/webgl/program/service/factory";
import gillWebglUniformFactory        from "app/gill/webgl/uniform/factory";
import gillWebglVariableTypeMap       from "app/gill/webgl/variable/type-map";

const gillWebglProgramService = gillWebglProgramServiceFactory.construct(
                                  gillWebglAttributeFactory,
                                  gillWebglProgramFactory,
                                  gillWebglUniformFactory,
                                  gillWebglVariableTypeMap
                                );

export default gillWebglProgramService;
