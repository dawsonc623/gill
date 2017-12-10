import AttributeCollectionFactory from "lib/gill/program/attribute/collection/factory.type";
import AttributeFactory           from "lib/gill/program/attribute/factory.type";
import GillProgramCache           from "lib/gill/program/cache.type";
import GillProgramFactory         from "lib/gill/program/factory.type";
import GillProgramService         from "lib/gill/program/service.type";
import GillProgramServiceFactory  from "lib/gill/program/service/factory.type";
import ProgramWebglService        from "lib/gill/program/webgl/service.type";
import StandardGillProgramService from "lib/gill/program/service.class";
import TextureCollectionFactory   from "lib/gill/program/texture/collection/factory.type";
import TextureFactory             from "lib/gill/program/texture/factory.type";
import UniformCollectionFactory   from "lib/gill/program/uniform/collection/factory.type";
import UniformFactory             from "lib/gill/program/uniform/factory.type";
import VariableTypeMap            from "lib/gill/program/variable/type-map.type";

class StandardGillProgramServiceFactory implements GillProgramServiceFactory
{
  construct(
    attributeCollectionFactory  : AttributeCollectionFactory,
    attributeFactory            : AttributeFactory,
    gillProgramCache            : GillProgramCache,
    gillProgramFactory          : GillProgramFactory,
    gillProgramWebglService     : ProgramWebglService,
    textureCollectionFactory    : TextureCollectionFactory,
    textureFactory              : TextureFactory,
    uniformCollectionFactory    : UniformCollectionFactory,
    uniformFactory              : UniformFactory,
    variableTypes               : VariableTypeMap
  ): GillProgramService
  {
    return  new StandardGillProgramService(
              attributeCollectionFactory,
              attributeFactory,
              gillProgramCache,
              gillProgramFactory,
              gillProgramWebglService,
              textureCollectionFactory,
              textureFactory,
              uniformCollectionFactory,
              uniformFactory,
              variableTypes
            );
  }
}

export default StandardGillProgramServiceFactory;
