import GillProgram        from "lib/gill/program.type";
import GillProgramSource  from "lib/gill/program/source.type";

interface GillSourceProgramMap
{
  hasProgram(
    gillProgramSource : GillProgramSource,
  ): boolean;

  getProgram(
    gillProgramSource : GillProgramSource,
  ): GillProgram;

  setProgram(
    gillProgramSource : GillProgramSource,
    gillProgram       : GillProgram
  ): void;
}

export default GillSourceProgramMap;
