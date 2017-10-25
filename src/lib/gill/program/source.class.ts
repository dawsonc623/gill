import GillProgramSource  from "lib/gill/program/source.type";

class StandardGillProgramSource implements GillProgramSource
{
  constructor(
    private vertexShaderShaderSource    : string,
    private fragmentShaderShaderSource  : string
  ) {

  }

  getFragmentShaderSource(): string
  {
    return this.fragmentShaderShaderSource;
  }

  getVertexShaderSource(): string
  {
    return this.vertexShaderShaderSource;
  }
}

export default StandardGillProgramSource;
