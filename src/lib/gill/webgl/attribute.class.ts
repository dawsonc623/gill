import GillWebglAttribute     from "lib/gill/webgl/attribute.type";
import GillWebglAttributeType from "lib/gill/webgl/attribute/type.type";

class StandardGillWebglAttribute implements GillWebglAttribute
{
  constructor(
    private name      : string,
    private type      : GillWebglAttributeType,
    private location  : number,
    private usage     : GLenum
  ) {

  }

  getLocation(): number
  {
    return  this.location;
  }

  getName(): string
  {
    return  this.name;
  }

  getType(): GillWebglAttributeType
  {
    return  this.type;
  }

  getUsage(): GLenum
  {
    return  this.usage;
  }
}

export default StandardGillWebglAttribute;
