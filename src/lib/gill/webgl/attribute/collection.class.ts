import GillAttribute            from "lib/gill/webgl/attribute.type";
import GillAttributeCollection  from "lib/gill/webgl/attribute/collection.type";

class StandardGillAttributeCollection implements GillAttributeCollection
{
  private attributes  : Array<GillAttribute>;

  constructor()
  {
    this.attributes = new Array<GillAttribute>();
  }

  addAttribute(
    attribute : GillAttribute
  ): void
  {
    this.attributes.push(
      attribute
    );
  }

  forEachAttribute(
    action  : (
      attribute : GillAttribute
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

export default StandardGillAttributeCollection;
