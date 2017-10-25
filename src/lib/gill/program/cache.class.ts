import GillProgram                  from "lib/gill/program.type";
import GillProgramCache             from "lib/gill/program/cache.type";
import GillSourceProgramMapFactory  from "lib/gill/program/source-program-map/factory.type";
import GillProgramSource            from "lib/gill/program/source.type";
import GillContextSourceMap         from "lib/gill/program/context-source-map.type";

class StandardGillProgramCache implements GillProgramCache
{
  constructor(
    private gillContextSources          : GillContextSourceMap,
    private gillSourceProgramMapFactory : GillSourceProgramMapFactory
  )
  {

  }

  cacheProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
    gillProgram           : GillProgram
  ): void
  {
    let gillPrograms  = this.gillContextSources.getSources(
                          webglRenderingContext
                        );

    if (gillPrograms === undefined)
    {
      gillPrograms  = this.gillSourceProgramMapFactory.construct();

      this.gillContextSources.setSources(
        webglRenderingContext,
        gillPrograms
      );
    }

    gillPrograms.setProgram(
      gillProgramSource,
      gillProgram
    );
  }

  hasProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
  ): boolean
  {
    const hasPrograms = this.gillContextSources.hasSources(
                          webglRenderingContext
                        );

    let hasProgram  = false;

    if (hasPrograms)
    {
      hasProgram = this.gillContextSources.getSources(
                    webglRenderingContext
                  )
                  .hasProgram(
                    gillProgramSource
                  );
    }

    return hasProgram;
  }

  getProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
  ): GillProgram
  {
    const gillPrograms  = this.gillContextSources.getSources(
                            webglRenderingContext
                          );

    let program;

    if (gillPrograms !== undefined)
    {
      program = gillPrograms.getProgram(
                  gillProgramSource
                );
    }

    if (program === undefined)
    {
      throw new Error(
              "No such cached program"
            );
    }

    return program;
  }
}

export default StandardGillProgramCache;
