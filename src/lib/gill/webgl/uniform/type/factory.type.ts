import GillUniformType  from "lib/gill/webgl/uniform/type.type";

interface GillUniformTypeFactory
{
  construct(
    dataType  : string,
    dataSize  : number
  ): GillUniformType;
}

export default GillUniformTypeFactory;
