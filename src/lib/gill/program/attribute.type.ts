import VariableType from "lib/gill/program/variable/type.type";

interface Attribute
{
  getLocation(): number;

  getName(): string;

  getType(): VariableType;

  getUsage(): GLenum;
}

export default Attribute;
