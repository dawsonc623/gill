import VariableType  from "lib/gill/program/variable/type.type";

interface Uniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): VariableType;
}

export default Uniform;
