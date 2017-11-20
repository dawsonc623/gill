import GillWebglAttribute         from "lib/gill/webgl/attribute.type";
import GillWebglAttributeFactory  from "lib/gill/webgl/attribute/factory.type";
import GillWebglVariableType      from "lib/gill/webgl/variable/type.type";
import StandardGillWebglAttribute from "lib/gill/webgl/attribute.class";

class StandardGillWebglAttributeFactory implements GillWebglAttributeFactory
{
  construct(
    name      : string,
    type      : GillWebglVariableType,
    location  : number,
    usage     : GLenum
  ): GillWebglAttribute
  {
    return  new StandardGillWebglAttribute(
              name,
              type,
              location,
              usage
            );
  }
}

export default StandardGillWebglAttributeFactory;
