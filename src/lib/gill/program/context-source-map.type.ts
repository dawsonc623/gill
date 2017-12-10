import GillProgramMap from "lib/gill/program/source-program-map.type";

interface GillContextSourceMap
{
  hasSources(
    webglRenderingContext : WebGLRenderingContext
  ): boolean;

  getSources(
    webglRenderingContext : WebGLRenderingContext
  ): GillProgramMap;

  setSources(
    webglRenderingContext : WebGLRenderingContext,
    gillPrograms          : GillProgramMap
  ): void;
}

export default GillContextSourceMap;
