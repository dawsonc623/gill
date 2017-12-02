import Uniform       from "lib/gill/program/uniform.type";
import VariableType  from "lib/gill/program/variable/type.type";

class StandardUniform implements Uniform
{
  constructor(
    private name      : string,
    private type      : VariableType,
    private location  : WebGLUniformLocation
  ) {

  }

  getLocation(): WebGLUniformLocation
  {
    return  this.location;
  }

  getName(): string
  {
    return  this.name;
  }

  getType(): VariableType
  {
    return  this.type;
  }
}

export default StandardUniform;
