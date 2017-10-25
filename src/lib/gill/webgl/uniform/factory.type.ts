import GillUniform      from "lib/gill/webgl/uniform.type";
import GillUniformType  from "lib/gill/webgl/uniform/type.type";

interface GillUniformFactory
{
  construct(
    name      : string,
    type      : GillUniformType,
    location  : WebGLUniformLocation
  ): GillUniform;
}

export default GillUniformFactory;
