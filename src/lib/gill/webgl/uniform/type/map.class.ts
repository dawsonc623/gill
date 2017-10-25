import GillUniformType    from "lib/gill/webgl/uniform/type.type";
import GillUniformTypeMap from "lib/gill/webgl/uniform/type/map.type";

class StandardGillUniformTypeMap implements GillUniformTypeMap
{
  private uniformType : Map<number, GillUniformType>;

  constructor()
  {
    this.uniformType  = new Map<number, GillUniformType>();
  }

  getUniformType(
    webglType : number //TODO Constrain to WebGLActiveInfo.type values, whatever those are
  ): GillUniformType
  {
    return  this.uniformType.get(
              webglType
            );
  }

  hasUniformType(
    webglType : number
  ): boolean
  {
    return  this.uniformType.has(
              webglType
            );
  }

  setUniformType(
    webglType             : number,
    gillUniformType : GillUniformType
  ): void
  {
    this.uniformType.set(
      webglType,
      gillUniformType
    );
  }
}

export default StandardGillUniformTypeMap;
