import GillWebglUniformType from "lib/gill/webgl/uniform/type.type";

interface GillWebglUniformTypeMap
{
  getUniformType(
    webglType : number
  ): GillWebglUniformType;

  hasUniformType(
    webglType : number
  ): boolean;

  setUniformType(
    webglType       : number,
    GillWebglUniformType : GillWebglUniformType
  ): void;
}

export default GillWebglUniformTypeMap;
