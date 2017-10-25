import GillAttribute      from "lib/gill/webgl/attribute.type";
import GillAttributeType  from "lib/gill/webgl/attribute/type.type";

interface GillAttributeFactory
{
  construct(
    name      : string,
    type      : GillAttributeType,
    location  : number,
    usage     : GLenum //TODO Constrain values
  ): GillAttribute;
}

export default GillAttributeFactory;
