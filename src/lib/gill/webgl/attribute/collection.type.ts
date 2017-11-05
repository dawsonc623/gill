import GillWebglAttribute from "lib/gill/webgl/attribute.type";

interface GillWebglAttributeCollection
{
  addAttribute(
    attribute : GillWebglAttribute
  ): void;

  forEachAttribute(
    action  : (
      attribute : GillWebglAttribute
    ) => void
  ): void;
}

export default GillWebglAttributeCollection;
