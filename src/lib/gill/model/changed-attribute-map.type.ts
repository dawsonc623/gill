interface GillChangedAttributeMap
{
  eachChanged(
    action  : (
      attributeName     : string,
      attributeChanged  : boolean
    ) => void
  ): void;

  hasChanged(
    attributeName : string,
  ): boolean;

  getChanged(
    attributeName : string,
  ): boolean;

  setChanged(
    attributeName     : string,
    attributeChanged  : boolean
  ): void;
}

export default GillChangedAttributeMap;
