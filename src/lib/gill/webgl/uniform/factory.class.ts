import GillWebglUniform         from "lib/gill/webgl/uniform.type";
import GillWebglUniformFactory  from "lib/gill/webgl/uniform/factory.type";
import GillWebglUniformType     from "lib/gill/webgl/uniform/type.type";
import StandardGillWebglUniform from "lib/gill/webgl/uniform.class";

class StandardGillWebglUniformFactory implements GillWebglUniformFactory
{
  construct(
    name      : string,
    type      : GillWebglUniformType,
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
