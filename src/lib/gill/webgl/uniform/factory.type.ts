import GillWebglUniform       from "lib/gill/webgl/uniform.type";
import GillWebglVariableType  from "lib/gill/webgl/variable/type.type";

interface GillWebglUniformFactory
{
  construct(
    name      : string,
    type      : GillWebglVariableType,
    location  : WebGLUniformLocation
  ): GillWebglUniform;
}

export default GillWebglUniformFactory;
