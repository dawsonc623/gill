import GillProgramSource          from "lib/gill/program/source.type";
import GillProgramSourceFactory   from "lib/gill/program/source/factory.type";
import StandardGillProgramSource  from "lib/gill/program/source.class";

class StandardGillProgramSourceFactory implements GillProgramSourceFactory
{
  construct(
    vertexShaderShaderSource    : string,
    fragmentShaderShaderSource  : string
  ): GillProgramSource
  {
    return new StandardGillProgramSource(
      vertexShaderShaderSource,
      fragmentShaderShaderSource
    );
  }
}

export default StandardGillProgramSourceFactory;
