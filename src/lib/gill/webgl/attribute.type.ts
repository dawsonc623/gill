import GillWebglVariableType from "lib/gill/webgl/variable/type.type";

interface GillWebglAttribute
{
  getLocation(): number;

  getName(): string;

  getType(): GillWebglVariableType;

  getUsage(): GLenum;
}

export default GillWebglAttribute;