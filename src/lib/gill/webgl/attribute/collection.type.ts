import GillAttribute  from "lib/gill/webgl/attribute.type";

interface GillAttributeCollection
{
  addAttribute(
    attribute : GillAttribute
  ): void;

  forEachAttribute(
    action  : (
      attribute : GillAttribute
    ) => void
  ): void;
}

export default GillAttributeCollection;
