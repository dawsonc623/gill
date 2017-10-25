import GillAttribute          from "lib/gill/webgl/attribute.type";
import GillAttributeFactory   from "lib/gill/webgl/attribute/factory.type";
import GillAttributeType      from "lib/gill/webgl/attribute/type.type";
import StandardGillAttribute  from "lib/gill/webgl/attribute.class";

class StandardGillAttributeFactory implements GillAttributeFactory
{
  construct(
    name      : string,
    type      : GillAttributeType,
    location  : number,
    usage     : GLenum
  ): GillAttribute
  {
    return  new StandardGillAttribute(
              name,
              type,
              location,
              usage
            );
  }
}

export default StandardGillAttributeFactory;
