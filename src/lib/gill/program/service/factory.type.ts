import AttributeCollectionFactory from "lib/gill/program/attribute/collection/factory.type";
import AttributeFactory           from "lib/gill/program/attribute/factory.type";
import GillProgramCache           from "lib/gill/program/cache.type";
import GillProgramFactory         from "lib/gill/program/factory.type";
import GillProgramService         from "lib/gill/program/service.type";
import GillProgramWebglService    from "lib/gill/program/webgl/service.type";
import StandardGillProgramService from "lib/gill/program/service.class";
import UniformCollectionFactory   from "lib/gill/program/uniform/collection/factory.type";
import UniformFactory             from "lib/gill/program/uniform/factory.type";
import WebglVariableTypeMap       from "lib/gill/program/variable/type-map.type";

interface GillProgramServiceFactory
{
  construct(
    attributeCollectionFactory  : AttributeCollectionFactory,
    attributeFactory            : AttributeFactory,
    gillProgramCache            : GillProgramCache,
    gillProgramFactory          : GillProgramFactory,
    gillProgramWebglService     : GillProgramWebglService,
    uniformCollectionFactory    : UniformCollectionFactory,
    uniformFactory              : UniformFactory,
    variableTypes               : WebglVariableTypeMap
  ): GillProgramService;
}

export default GillProgramServiceFactory;
