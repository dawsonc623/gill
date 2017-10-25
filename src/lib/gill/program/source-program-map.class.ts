import GillProgramMap     from "lib/gill/program/source-program-map.type";
import GillProgramSource  from "lib/gill/program/source.type";
import GillProgram        from "lib/gill/program.type";

class StandardGillSourceProgramMap implements GillProgramMap
{
  private programs  : Map<GillProgramSource, GillProgram>;

  constructor()
  {
    this.programs = new Map<GillProgramSource, GillProgram>();
  }

  hasProgram(
    gillProgramSource : GillProgramSource
  ): boolean
  {
    return  this.programs.has(
              gillProgramSource
            );
  }

  getProgram(
    gillProgramSource : GillProgramSource
  ): GillProgram
  {
    return  this.programs.get(
              gillProgramSource
            );
  }

  setProgram(
    gillProgramSource : GillProgramSource,
    gillProgram       : GillProgram
  ): void
  {
    this.programs.set(
      gillProgramSource,
      gillProgram
    );
  }
}

export default StandardGillSourceProgramMap;

