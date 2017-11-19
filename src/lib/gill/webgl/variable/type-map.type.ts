import GillWebglVariableType from "lib/gill/webgl/variable/type.type";

interface GillWebglVariableTypeMap
{
  eachWebglVariableType(
    action  : (
      webglType             : GLenum,
      gillWebglVariableType : GillWebglVariableType
    ) => void
  ): void;

  hasWebglVariableType(
    webglType : GLenum,
  ): boolean;

  getWebglVariableType(
    webglType : GLenum,
  ): GillWebglVariableType;

  setWebglVariableType(
    webglType             : GLenum,
    gillWebglVariableType : GillWebglVariableType
  ): void;
}

export default GillWebglVariableTypeMap;
