import GillWebglUniform     from "lib/gill/webgl/uniform.type";
import GillWebglUniformType from "lib/gill/webgl/uniform/type.type";

class StandardGillWebglUniform implements GillWebglUniform
{
  constructor(
    private name      : string,
    private type      : GillWebglUniformType,
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

  getType(): GillWebglUniformType
  {
    return  this.type;
  }
}

export default StandardGillWebglUniform;
