import GillModelAttributeDataCache      from "lib/gill/model/attribute-data/cache.type";
import GillModelAttributeDataFactory    from "lib/gill/model/attribute-data/factory.type";
import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";

interface GillModelAttributeDataRepositoryFactory
{
  construct(
    gillModelAttributeDataCache   : GillModelAttributeDataCache,
    gillModelAttributeDataFactory : GillModelAttributeDataFactory
  ): GillModelAttributeDataRepository;
}

export default GillModelAttributeDataRepositoryFactory;
