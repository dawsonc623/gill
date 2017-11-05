import GillWebglAttribute     from "lib/gill/webgl/attribute.type";
import GillWebglAttributeType from "lib/gill/webgl/attribute/type.type";

interface GillWebglAttributeFactory
{
  construct(
    name      : string,
    type      : GillWebglAttributeType,
    location  : number,
    usage     : GLenum
  ): GillWebglAttribute;
}

export default GillWebglAttributeFactory;
