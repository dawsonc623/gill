import GillProgramCache             from "lib/gill/program/cache.type";

import gillContextSourceMapFactory  from "app/gill/program/context-source-map/factory";
import gillProgramCacheFactory      from "app/gill/program/cache/factory";
import gillSourceProgramMapFactory  from "app/gill/program/source-program-map/factory";

const gillProgramCache  = gillProgramCacheFactory.construct(
                            gillContextSourceMapFactory.construct(),
                            gillSourceProgramMapFactory
                          );

export default gillProgramCache;
