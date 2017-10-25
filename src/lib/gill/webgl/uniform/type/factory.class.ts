import GillUniformType          from "lib/gill/webgl/uniform/type.type";
import GillUniformTypeFactory   from "lib/gill/webgl/uniform/type/factory.type";
import StandardGillUniformType  from "lib/gill/webgl/uniform/type.class";

class StandardGillUniformTypeFactory implements GillUniformTypeFactory
{
  construct(
    dataType  : string,
    dataSize  : number
  ): GillUniformType
  {
    return  new StandardGillUniformType(
              dataType,
              dataSize
            );
  }
}

export default StandardGillUniformTypeFactory;
