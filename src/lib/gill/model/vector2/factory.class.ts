import GillVector2          from "lib/gill/model/vector2.type";
import GillVector2Factory   from "lib/gill/model/vector2/factory.type";
import StandardGillVector2  from "lib/gill/model/vector2.class";

class StandardGillVector2Factory implements GillVector2Factory
{
  construct(
    v1  : number,
    v2  : number
  ): GillVector2
  {
    return  new StandardGillVector2(
      v1,
      v2
    );
  }
}

export default StandardGillVector2Factory;
