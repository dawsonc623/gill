import GillContextSourceMap from "lib/gill/program/context-source-map.type";
import GillProgramMap       from "lib/gill/program/source-program-map.type";

class StandardGillContextSourceMap implements GillContextSourceMap
{
  private contextSources  : Map<WebGLRenderingContext, GillProgramMap>;

  constructor()
  {
    this.contextSources = new Map<WebGLRenderingContext, GillProgramMap>();
  }

  hasSources(
    WebGLRenderingContext : WebGLRenderingContext
  ): boolean
  {
    return  this.contextSources.has(
              WebGLRenderingContext
            );
  }

  getSources(
    WebGLRenderingContext : WebGLRenderingContext
  ): GillProgramMap
  {
    return  this.contextSources.get(
              WebGLRenderingContext
            );
  }

  setSources(
    WebGLRenderingContext : WebGLRenderingContext,
    gillProgramSources    : GillProgramMap
  ): void
  {
    this.contextSources.set(
      WebGLRenderingContext,
      gillProgramSources
    );
  }
}

export default StandardGillContextSourceMap;
