import GillAttributeType  from "lib/gill/webgl/attribute/type.type";

interface GillAttributeTypeMap
{
  getAttributeType(
    webglType : number
  ): GillAttributeType;

  hasAttributeType(
    webglType : number
  ): boolean;

  setAttributeType(
    webglType             : number,
    gillAttributeType : GillAttributeType
  ): void;
}

export default GillAttributeTypeMap;
