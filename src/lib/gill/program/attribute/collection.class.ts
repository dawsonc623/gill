import Attribute            from "lib/gill/program/attribute.type";
import AttributeCollection  from "lib/gill/program/attribute/collection.type";

class StandardAttributeCollection implements AttributeCollection
{
  private attributes  : Array<Attribute>;

  constructor()
  {
    this.attributes = new Array<Attribute>();
  }

  addAttribute(
    attribute : Attribute
  ): void
  {
    this.attributes.push(
      attribute
    );
  }

  eachAttribute(
    action  : (
      attribute : Attribute
    ) => void
  ): void
  {
    this.attributes.forEach(
      (attribute) => {
        action(
          attribute
        );
      }
    );
  }
}

export default StandardAttributeCollection;
