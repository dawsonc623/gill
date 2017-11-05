import GillWebglUniformType from "lib/gill/webgl/uniform/type.type";

interface GillWebglUniformTypeFactory
{
  construct(
    dataType  : string,
    dataSize  : number
  ): GillWebglUniformType;
}

export default GillWebglUniformTypeFactory;
