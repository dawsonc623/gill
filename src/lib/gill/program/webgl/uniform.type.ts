import GillProgramWebglVariableType from "lib/gill/program/webgl/variable/type.type";

interface GillProgramWebglUniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): GillProgramWebglVariableType;
}

export default GillProgramWebglUniform;
