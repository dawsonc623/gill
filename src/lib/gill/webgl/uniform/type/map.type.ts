import GillUniformType  from "lib/gill/webgl/uniform/type.type";

interface GillUniformTypeMap
{
  getUniformType(
    webglType : number
  ): GillUniformType;

  hasUniformType(
    webglType : number
  ): boolean;

  setUniformType(
    webglType       : number,
    gillUniformType : GillUniformType
  ): void;
}

export default GillUniformTypeMap;
