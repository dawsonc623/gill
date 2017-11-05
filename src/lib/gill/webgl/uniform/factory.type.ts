import GillWebglUniform     from "lib/gill/webgl/uniform.type";
import GillWebglUniformType from "lib/gill/webgl/uniform/type.type";

interface GillWebglUniformFactory
{
  construct(
    name      : string,
    type      : GillWebglUniformType,
    location  : WebGLUniformLocation
  ): GillWebglUniform;
}

export default GillWebglUniformFactory;
