import GillUniform          from "lib/gill/webgl/uniform.type";
import GillUniformFactory   from "lib/gill/webgl/uniform/factory.type";
import GillUniformType      from "lib/gill/webgl/uniform/type.type";
import StandardGillUniform  from "lib/gill/webgl/uniform.class";

class StandardGillUniformFactory implements GillUniformFactory
{
  construct(
    name      : string,
    type      : GillUniformType,
    location  : WebGLUniformLocation
  ): GillUniform
  {
    return  new StandardGillUniform(
              name,
              type,
              location
            );
  }
}

export default StandardGillUniformFactory;
