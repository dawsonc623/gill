import GillModelAttributeDataCache          from "lib/gill/model/attribute-data/cache.type";
import GillModelAttributeDataCacheFactory   from "lib/gill/model/attribute-data/cache/factory.type";
import StandardGillModelAttributeDataCache  from "lib/gill/model/attribute-data/cache.class";

class StandardGillModelAttributeDataCacheFactory implements GillModelAttributeDataCacheFactory
{
  construct(): GillModelAttributeDataCache
  {
    return  new StandardGillModelAttributeDataCache();
  }
}

export default StandardGillModelAttributeDataCacheFactory;
