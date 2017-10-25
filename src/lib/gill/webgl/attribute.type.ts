import GillAttributeType  from "lib/gill/webgl/attribute/type.type";
import TypedArray         from "lib/gill/webgl/typed-array.type";

interface GillAttribute
{
  getLocation(): number;

  getName(): string;

  getType(): GillAttributeType;

  getUsage(): GLenum;

  toTypedArray(
    webglVariableData : Array<number>
  ): TypedArray;
}

export default GillAttribute;
