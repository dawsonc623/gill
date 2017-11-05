import GillWebglAttributeType from "lib/gill/webgl/attribute/type.type";

interface GillWebglAttribute
{
  getLocation(): number;

  getName(): string;

  getType(): GillWebglAttributeType;

  getUsage(): GLenum;
}

export default GillWebglAttribute;