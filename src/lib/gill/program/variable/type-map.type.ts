import VariableType from "lib/gill/program/variable/type.type";

interface VariableTypeMap
{
  eachWebglVariableType(
    action  : (
      webglType             : GLenum,
      gillWebglVariableType : VariableType
    ) => void
  ): void;

  hasWebglVariableType(
    webglType : GLenum,
  ): boolean;

  getWebglVariableType(
    webglType : GLenum,
  ): VariableType;

  setWebglVariableType(
    webglType             : GLenum,
    gillWebglVariableType : VariableType
  ): void;
}

export default VariableTypeMap;
