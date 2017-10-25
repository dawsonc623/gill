import GillContextSourceMap         from "lib/gill/program/context-source-map.type";
import GillProgramCache             from "lib/gill/program/cache.type";
import GillProgramCacheFactory      from "lib/gill/program/cache/factory.type";
import GillSourceProgramMapFactory  from "lib/gill/program/source-program-map/factory.type";
import StandardGillProgramCache     from "lib/gill/program/cache.class";

class StandardGillProgramCacheFactory implements GillProgramCacheFactory
{
  construct(
    gillProgramSources    : GillContextSourceMap,
    gillProgramMapFactory : GillSourceProgramMapFactory
  ): GillProgramCache
  {
    return  new StandardGillProgramCache(
              gillProgramSources,
              gillProgramMapFactory
            );
  }
}

export default StandardGillProgramCacheFactory;
