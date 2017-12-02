import Attribute from "lib/gill/program/attribute.type";

interface AttributeCollection
{
  addAttribute(
    attribute : Attribute
  ): void;

  eachAttribute(
    action  : (
      attribute : Attribute
    ) => void
  ): void;
}

export default AttributeCollection;
