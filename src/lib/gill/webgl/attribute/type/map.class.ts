import GillWebglAttributeType     from "lib/gill/webgl/attribute/type.type";
import GillWebglAttributeTypeMap  from "lib/gill/webgl/attribute/type/map.type";

class StandardGillWebglAttributeTypeMap implements GillWebglAttributeTypeMap
{
  private attributeType : Map<number, GillWebglAttributeType>;

  constructor()
  {
    this.attributeType  = new Map<number, GillWebglAttributeType>();
  }

  getAttributeType(
    webglType : number
  ): GillWebglAttributeType
  {
    return  this.attributeType.get(
      webglType
    );
  }

  hasAttributeType(
    webglType : number
  ): boolean
  {
    return  this.attributeType.has(
      webglType
    );
  }

  setAttributeType(
    webglType         : number,
    GillWebglAttributeType : GillWebglAttributeType
  ): void
  {
    this.attributeType.set(
      webglType,
      GillWebglAttributeType
    );
  }
}

export default StandardGillWebglAttributeTypeMap;
