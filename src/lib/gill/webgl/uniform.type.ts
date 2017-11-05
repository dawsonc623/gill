import GillWebglUniformType from "lib/gill/webgl/uniform/type.type";

interface GillWebglUniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): GillWebglUniformType;
}

export default GillWebglUniform;
