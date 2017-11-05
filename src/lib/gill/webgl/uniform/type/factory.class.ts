import GillWebglUniformType         from "lib/gill/webgl/uniform/type.type";
import GillWebglUniformTypeFactory  from "lib/gill/webgl/uniform/type/factory.type";
import StandardGillWebglUniformType from "lib/gill/webgl/uniform/type.class";

class StandardGillWebglUniformTypeFactory implements GillWebglUniformTypeFactory
{
  construct(
    dataType  : string,
    dataSize  : number
  ): GillWebglUniformType
  {
    return  new StandardGillWebglUniformType(
              dataType,
              dataSize
            );
  }
}

export default StandardGillWebglUniformTypeFactory;
