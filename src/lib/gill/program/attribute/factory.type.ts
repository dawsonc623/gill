import Attribute     from "lib/gill/program/attribute.type";
import VariableType  from "lib/gill/program/variable/type.type";

interface AttributeFactory
{
  construct(
    name      : string,
    type      : VariableType,
    location  : number,
    usage     : GLenum
  ): Attribute;
}

export default AttributeFactory;
