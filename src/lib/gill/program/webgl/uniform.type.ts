import GillProgramWebglUniformType  from "lib/gill/program/webgl/uniform/type.type";

interface GillProgramWebglUniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): GillProgramWebglUniformType;
}

export default GillProgramWebglUniform;
