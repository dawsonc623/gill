import VariableTypeMap from "lib/gill/program/variable/type-map.type";
import VariableType    from "lib/gill/program/variable/type.type";

class StandardVariableTypeMap implements VariableTypeMap
{
  private gillWebglVariableTypes : Map<GLenum, VariableType>;

  constructor()
  {
    this.gillWebglVariableTypes = new Map<GLenum, VariableType>();
  }

  eachWebglVariableType(
    action  : (
      webglType             : GLenum,
      gillWebglVariableType : VariableType
    ) => void
  ): void
  {
    for (
      let [
        webglType,
        gillWebglVariableType
      ]
      of this.gillWebglVariableTypes
    ) {
      action(
        webglType,
        gillWebglVariableType
      );
    }
  }

  hasWebglVariableType(
    webglType : GLenum
  ): boolean
  {
    return  this.gillWebglVariableTypes.has(
              webglType
            );
  }

  getWebglVariableType(
    webglType : GLenum
  ): VariableType
  {
    return  this.gillWebglVariableTypes.get(
              webglType
            );
  }

  setWebglVariableType(
    webglType             : GLenum,
    gillWebglVariableType : VariableType
  ): void
  {
    this.gillWebglVariableTypes.set(
      webglType,
      gillWebglVariableType
    );
  }
}

export default StandardVariableTypeMap;
