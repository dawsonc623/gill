import GillModelAttributeDataRepository         from "lib/gill/model/attribute-data/repository.type";

import gillModelAttributeDataCache              from "app/gill/model/attribute-data/cache";
import gillModelAttributeDataFactory            from "app/gill/model/attribute-data/factory";
import gillModelAttributeDataRepositoryFactory  from "app/gill/model/attribute-data/repository/factory";

const gillModelAttributeDataRepository  = gillModelAttributeDataRepositoryFactory.construct(
                                            gillModelAttributeDataCache,
                                            gillModelAttributeDataFactory
                                          );

export default gillModelAttributeDataRepository;

