import GillAttributeType    from "lib/gill/webgl/attribute/type.type";
import GillAttributeTypeMap from "lib/gill/webgl/attribute/type/map.type";

class StandardGillAttributeTypeMap implements GillAttributeTypeMap
{
  private attributeType : Map<number, GillAttributeType>;

  constructor()
  {
    this.attributeType  = new Map<number, GillAttributeType>();
  }

  getAttributeType(
    webglType : number
  ): GillAttributeType
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
    gillAttributeType : GillAttributeType
  ): void
  {
    this.attributeType.set(
      webglType,
      gillAttributeType
    );
  }
}

export default StandardGillAttributeTypeMap;
