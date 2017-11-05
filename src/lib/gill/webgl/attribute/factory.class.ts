import GillWebglAttribute         from "lib/gill/webgl/attribute.type";
import GillWebglAttributeFactory  from "lib/gill/webgl/attribute/factory.type";
import GillWebglAttributeType     from "lib/gill/webgl/attribute/type.type";
import StandardGillWebglAttribute from "lib/gill/webgl/attribute.class";

class StandardGillWebglAttributeFactory implements GillWebglAttributeFactory
{
  construct(
    name      : string,
    type      : GillWebglAttributeType,
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
