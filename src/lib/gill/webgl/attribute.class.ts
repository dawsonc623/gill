import GillWebglAttribute     from "lib/gill/webgl/attribute.type";
import GillWebglVariableType  from "lib/gill/webgl/variable/type.type";

class StandardGillWebglAttribute implements GillWebglAttribute
{
  constructor(
    private name      : string,
    private type      : GillWebglVariableType,
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

  getType(): GillWebglVariableType
  {
    return  this.type;
  }

  getUsage(): GLenum
  {
    return  this.usage;
  }
}

export default StandardGillWebglAttribute;
