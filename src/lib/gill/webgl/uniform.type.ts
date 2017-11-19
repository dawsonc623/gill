import GillWebglVariableType  from "lib/gill/webgl/variable/type.type";

interface GillWebglUniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): GillWebglVariableType;
}

export default GillWebglUniform;
