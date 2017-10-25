import GillProgram        from "lib/gill/program.type";
import GillProgramSource  from "lib/gill/program/source.type";

interface GillProgramService
{
  getProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource
  ): GillProgram;
}

export default GillProgramService;
