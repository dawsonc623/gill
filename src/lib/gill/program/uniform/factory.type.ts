import Uniform       from "lib/gill/program/uniform.type";
import VariableType  from "lib/gill/program/variable/type.type";

interface UniformFactory
{
  construct(
    name      : string,
    type      : VariableType,
    location  : WebGLUniformLocation
  ): Uniform;
}

export default UniformFactory;
