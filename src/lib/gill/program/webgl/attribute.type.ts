import GillProgramWebglAttributeType  from "lib/gill/program/webgl/attribute/type.type";

interface GillProgramWebglAttribute
{
  getLocation(): number;

  getName(): string;

  getType(): GillProgramWebglAttributeType;

  getUsage(): GLenum;
}

export default GillProgramWebglAttribute;
