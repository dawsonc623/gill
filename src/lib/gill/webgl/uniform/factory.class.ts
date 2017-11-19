import GillWebglUniform         from "lib/gill/webgl/uniform.type";
import GillWebglUniformFactory  from "lib/gill/webgl/uniform/factory.type";
import GillWebglVariableType    from "lib/gill/webgl/variable/type.type";
import StandardGillWebglUniform from "lib/gill/webgl/uniform.class";

class StandardGillWebglUniformFactory implements GillWebglUniformFactory
{
  construct(
    name      : string,
    type      : GillWebglVariableType,
    location  : WebGLUniformLocation
  ): GillWebglUniform
  {
    return  new StandardGillWebglUniform(
              name,
              type,
              location
            );
  }
}

export default StandardGillWebglUniformFactory;
