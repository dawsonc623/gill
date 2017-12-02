import Uniform         from "lib/gill/program/uniform.type";
import UniformFactory  from "lib/gill/program/uniform/factory.type";
import VariableType    from "lib/gill/program/variable/type.type";
import StandardUniform from "lib/gill/program/uniform.class";

class StandardUniformFactory implements UniformFactory
{
  construct(
    name      : string,
    type      : VariableType,
    location  : WebGLUniformLocation
  ): Uniform
  {
    return  new StandardUniform(
              name,
              type,
              location
            );
  }
}

export default StandardUniformFactory;
