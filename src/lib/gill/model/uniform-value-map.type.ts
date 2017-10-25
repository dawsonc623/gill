import GillUniformValue from "lib/gill/model/uniform-value.type";

interface GillUniformValueMap
{
  hasValue(
    uniformName : string,
  ): boolean;

  getValue(
    uniformName : string,
  ): GillUniformValue;

  setValue(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): void;
}

export default GillUniformValueMap;
