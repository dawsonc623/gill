import GillWebglVariableTypeMap from "lib/gill/webgl/variable/type-map.type";
import GillWebglVariableType    from "lib/gill/webgl/variable/type.type";

class StandardGillWebglVariableTypeMap implements GillWebglVariableTypeMap
{
  private gillWebglVariableTypes : Map<GLenum, GillWebglVariableType>;

  constructor()
  {
    this.gillWebglVariableTypes = new Map<GLenum, GillWebglVariableType>();
  }

  eachWebglVariableType(
    action  : (
      webglType             : GLenum,
      gillWebglVariableType : GillWebglVariableType
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
  ): GillWebglVariableType
  {
    return  this.gillWebglVariableTypes.get(
              webglType
            );
  }

  setWebglVariableType(
    webglType             : GLenum,
    gillWebglVariableType : GillWebglVariableType
  ): void
  {
    this.gillWebglVariableTypes.set(
      webglType,
      gillWebglVariableType
    );
  }
}

export default StandardGillWebglVariableTypeMap;
