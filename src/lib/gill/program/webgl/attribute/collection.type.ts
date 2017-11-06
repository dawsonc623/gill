import GillProgramWebglAttribute  from "lib/gill/program/webgl/attribute.type";

interface GillProgramWebglAttributeCollection
{
  // addAttribute(
  //   attribute : GillProgramWebglAttribute
  // ): void;

  eachAttribute(
    action  : (
      attribute : GillProgramWebglAttribute
    ) => void
  ): void;
}

export default GillProgramWebglAttributeCollection;
