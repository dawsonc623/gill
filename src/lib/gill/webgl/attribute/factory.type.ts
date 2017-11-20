import GillWebglAttribute     from "lib/gill/webgl/attribute.type";
import GillWebglVariableType  from "lib/gill/webgl/variable/type.type";

interface GillWebglAttributeFactory
{
  construct(
    name      : string,
    type      : GillWebglVariableType,
    location  : number,
    usage     : GLenum
  ): GillWebglAttribute;
}

export default GillWebglAttributeFactory;
