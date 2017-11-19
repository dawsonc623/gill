import GillWebglUniform       from "lib/gill/webgl/uniform.type";
import GillWebglVariableType  from "lib/gill/webgl/variable/type.type";

class StandardGillWebglUniform implements GillWebglUniform
{
  constructor(
    private name      : string,
    private type      : GillWebglVariableType,
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

  getType(): GillWebglVariableType
  {
    return  this.type;
  }
}

export default StandardGillWebglUniform;
