import GillUniformValueMap  from "lib/gill/model/uniform-value-map.type";
import GillUniformValue     from "lib/gill/model/uniform-value.type";

class StandardGillUniformValueMap implements GillUniformValueMap
{
  private uniformValues  : Map<string, GillUniformValue>;

  constructor()
  {
    this.uniformValues = new Map<string, GillUniformValue>();
  }

  hasValue(
    uniformName : string
  ): boolean
  {
    return  this.uniformValues.has(
              uniformName
            );
  }

  getValue(
    uniformName : string
  ): GillUniformValue
  {
    return  this.uniformValues.get(
              uniformName
            );
  }

  setValue(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): void
  {
    this.uniformValues.set(
      uniformName,
      uniformValue
    );
  }
}

export default StandardGillUniformValueMap;
