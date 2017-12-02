import Attribute         from "lib/gill/program/attribute.type";
import AttributeFactory  from "lib/gill/program/attribute/factory.type";
import VariableType      from "lib/gill/program/variable/type.type";
import StandardAttribute from "lib/gill/program/attribute.class";

class StandardAttributeFactory implements AttributeFactory
{
  construct(
    name      : string,
    type      : VariableType,
    location  : number,
    usage     : GLenum
  ): Attribute
  {
    return  new StandardAttribute(
              name,
              type,
              location,
              usage
            );
  }
}

export default StandardAttributeFactory;
