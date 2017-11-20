import GillModelAttributeDataCache              from "lib/gill/model/attribute-data/cache.type";
import GillModelAttributeDataFactory            from "lib/gill/model/attribute-data/factory.type";
import GillModelAttributeDataRepository         from "lib/gill/model/attribute-data/repository.type";
import GillModelAttributeDataRepositoryFactory  from "lib/gill/model/attribute-data/repository/factory.type";
import StandardGillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.class";

class StandardGillModelAttributeDataRepositoryFactory implements GillModelAttributeDataRepositoryFactory
{
  construct(
    gillModelAttributeDataCache   : GillModelAttributeDataCache,
    gillModelAttributeDataFactory : GillModelAttributeDataFactory
  ): GillModelAttributeDataRepository
  {
    return  new StandardGillModelAttributeDataRepository(
              gillModelAttributeDataCache,
              gillModelAttributeDataFactory
            );
  }
}

export default StandardGillModelAttributeDataRepositoryFactory;
