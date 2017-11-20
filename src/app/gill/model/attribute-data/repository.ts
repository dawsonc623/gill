import gillModelAttributeDataRepositoryFactory  from "app/gill/model/attribute-data/repository/factory";

import gillModelAttributeDataCache              from "app/gill/model/attribute-data/cache";
import gillModelAttributeDataFactory            from "app/gill/model/attribute-data/factory";

const gillModelAttributeDataRepository  = gillModelAttributeDataRepositoryFactory.construct(
                                            gillModelAttributeDataCache,
                                            gillModelAttributeDataFactory
                                          );

export default gillModelAttributeDataRepository;

