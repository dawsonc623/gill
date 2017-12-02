import Uniform from "lib/gill/program/uniform.type";

interface UniformCollection
{
  addUniform(
    uniform : Uniform
  ): void;

  eachUniform(
    action  : (
      uniform : Uniform
    ) => void
  ): void;
}

export default UniformCollection;
