import GillAttribute      from "lib/gill/webgl/attribute.type";
import GillAttributeType  from "lib/gill/webgl/attribute/type.type";

interface GillAttributeFactory
{
  construct(
    name      : string,
    type      : GillAttributeType,
    location  : number
  ): GillAttribute;
}

export default GillAttributeFactory;
