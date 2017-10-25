import GillAttribute      from "lib/gill/webgl/attribute.type";
import GillAttributeType  from "lib/gill/webgl/attribute/type.type";
import TypedArray         from "lib/gill/webgl/typed-array.type";

class StandardGillAttribute implements GillAttribute
{
  constructor(
    private name      : string,
    private type      : GillAttributeType,
    private location  : number
  ) {

  }

  getLocation(): number
  {
    return  this.location;
  }

  getName(): string
  {
    return  this.name;
  }

  getType(): GillAttributeType
  {
    return  this.type;
  }

  toTypedArray(
    webglVariableData : Array<number>
  ): TypedArray
  {
    return  this.type.getTypedArrayFactory().construct(
              webglVariableData
            );
  }
}

export default StandardGillAttribute;
