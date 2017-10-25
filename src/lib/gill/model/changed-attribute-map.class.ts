import GillChangedAttributeMap  from "lib/gill/model/changed-attribute-map.type";

class StandardGillChangedAttributeMap implements GillChangedAttributeMap
{
  private attributeChanges  : Map<string, boolean>;

  constructor()
  {
    this.attributeChanges = new Map<string, boolean>();
  }

  eachChanged(
    action  : (
      attributeName     : string,
      attributeChanged  : boolean
    ) => void
  ): void
  {
    for (
      let [
        attributeName,
        attributeChanged
      ]
      of this.attributeChanges
    ) {
      action(
        attributeName,
        attributeChanged
      );
    }
  }


  hasChanged(
    attributeName : string
  ): boolean
  {
    return  this.attributeChanges.has(
              attributeName
            );
  }

  getChanged(
    attributeName : string
  ): boolean
  {
    return  this.attributeChanges.get(
              attributeName
            );
  }

  setChanged(
    attributeName     : string,
    attributeChanged  : boolean
  ): void
  {
    this.attributeChanges.set(
      attributeName,
      attributeChanged
    );
  }
}

export default StandardGillChangedAttributeMap;
