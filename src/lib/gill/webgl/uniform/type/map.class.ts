import GillWebglUniformType     from "lib/gill/webgl/uniform/type.type";
import GillWebglUniformTypeMap  from "lib/gill/webgl/uniform/type/map.type";

class StandardGillWebglUniformTypeMap implements GillWebglUniformTypeMap
{
  private uniformType : Map<number, GillWebglUniformType>;

  constructor()
  {
    this.uniformType  = new Map<number, GillWebglUniformType>();
  }

  getUniformType(
    webglType : number
  ): GillWebglUniformType
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
    GillWebglUniformType : GillWebglUniformType
  ): void
  {
    this.uniformType.set(
      webglType,
      GillWebglUniformType
    );
  }
}

export default StandardGillWebglUniformTypeMap;
