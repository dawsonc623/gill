import GillProgram        from "lib/gill/program.type";
import GillProgramSource  from "lib/gill/program/source.type";

interface GillProgramCache
{
  cacheProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
    gillProgram           : GillProgram
  ): void;

  hasProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
  ): boolean;

  getProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
  ): GillProgram;
}

export default GillProgramCache;
