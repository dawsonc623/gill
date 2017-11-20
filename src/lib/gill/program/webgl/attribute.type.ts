import GillProgramWebglVariableType from "lib/gill/program/webgl/variable/type.type";

interface GillProgramWebglAttribute
{
  getLocation(): number;

  getName(): string;

  getType(): GillProgramWebglVariableType;

  getUsage(): GLenum;
}

export default GillProgramWebglAttribute;
