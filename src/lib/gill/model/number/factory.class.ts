import GillNumber         from "lib/gill/model/number.type";
import GillNumberFactory  from "lib/gill/model/number/factory.type";
import StandardGillNumber from "lib/gill/model/number.class";

class StandardGillNumberFactory implements GillNumberFactory
{
  construct(
    value : number
  ): GillNumber
  {
    return  new StandardGillNumber(
      value
    );
  }
}

export default StandardGillNumberFactory;
