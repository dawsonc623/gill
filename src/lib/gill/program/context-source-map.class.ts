import GillContextSourceMap from "lib/gill/program/context-source-map.type";
import GillSourceProgramMap from "lib/gill/program/source-program-map.type";

class StandardGillContextSourceMap implements GillContextSourceMap
{
  private contextSources  : Map<WebGLRenderingContext, GillSourceProgramMap>;

  constructor()
  {
    this.contextSources = new Map<WebGLRenderingContext, GillSourceProgramMap>();
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
  ): GillSourceProgramMap
  {
    return  this.contextSources.get(
              WebGLRenderingContext
            );
  }

  setSources(
    WebGLRenderingContext : WebGLRenderingContext,
    gillProgramSources    : GillSourceProgramMap
  ): void
  {
    this.contextSources.set(
      WebGLRenderingContext,
      gillProgramSources
    );
  }
}

export default StandardGillContextSourceMap;
