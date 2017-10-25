import GillContextSourceMap         from "lib/gill/program/context-source-map.type";
import GillProgramCache             from "lib/gill/program/cache.type";
import GillSourceProgramMapFactory  from "lib/gill/program/source-program-map/factory.type";

interface GillProgramCacheFactory
{
  construct(
    gillProgramSources    : GillContextSourceMap,
    gillProgramMapFactory : GillSourceProgramMapFactory
  ): GillProgramCache;
}

export default GillProgramCacheFactory;
