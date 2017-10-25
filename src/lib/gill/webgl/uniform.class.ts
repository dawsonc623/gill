import GillUniform      from "lib/gill/webgl/uniform.type";
import GillUniformType  from "lib/gill/webgl/uniform/type.type";

class StandardGillUniform implements GillUniform
{
  constructor(
    private name      : string,
    private type      : GillUniformType,
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

  getType(): GillUniformType
  {
    return  this.type;
  }
}

export default StandardGillUniform;
