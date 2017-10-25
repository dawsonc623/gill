import GillUniformType  from "lib/gill/webgl/uniform/type.type";

interface GillUniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): GillUniformType;
}

export default GillUniform;
