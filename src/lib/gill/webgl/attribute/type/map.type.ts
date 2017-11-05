import GillWebglAttributeType from "lib/gill/webgl/attribute/type.type";

interface GillWebglAttributeTypeMap
{
  getAttributeType(
    webglType : number
  ): GillWebglAttributeType;

  hasAttributeType(
    webglType : number
  ): boolean;

  setAttributeType(
    webglType             : number,
    GillWebglAttributeType : GillWebglAttributeType
  ): void;
}

export default GillWebglAttributeTypeMap;
