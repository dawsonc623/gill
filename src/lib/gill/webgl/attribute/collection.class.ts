import GillWebglAttribute           from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection from "lib/gill/webgl/attribute/collection.type";

class StandardGillWebglAttributeCollection implements GillWebglAttributeCollection
{
  private attributes  : Array<GillWebglAttribute>;

  constructor()
  {
    this.attributes = new Array<GillWebglAttribute>();
  }

  addAttribute(
    attribute : GillWebglAttribute
  ): void
  {
    this.attributes.push(
      attribute
    );
  }

  forEachAttribute(
    action  : (
      attribute : GillWebglAttribute
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

export default StandardGillWebglAttributeCollection;
