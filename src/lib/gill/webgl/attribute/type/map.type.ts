import GillAttributeType  from "lib/gill/webgl/attribute/type.type";

interface GillAttributeTypeMap
{
  getAttributeType(
    webglType : number //TODO Constrain to WebGLActiveInfo.type values, whatever those are
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
