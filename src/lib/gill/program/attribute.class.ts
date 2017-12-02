import Attribute    from "lib/gill/program/attribute.type";
import VariableType from "lib/gill/program/variable/type.type";

class StandardAttribute implements Attribute
{
  constructor(
    private name      : string,
    private type      : VariableType,
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

  getType(): VariableType
  {
    return  this.type;
  }

  getUsage(): GLenum
  {
    return  this.usage;
  }
}

export default StandardAttribute;
