import GillVector3          from "lib/gill/model/vector3.type";
import GillVector3Factory   from "lib/gill/model/vector3/factory.type";
import StandardGillVector3  from "lib/gill/model/vector3.class";

class StandardGillVector3Factory implements GillVector3Factory
{
  construct(
    v1  : number,
    v2  : number,
    v3  : number
  ): GillVector3
  {
    return  new StandardGillVector3(
      v1,
      v2,
      v3
    );
  }
}

export default StandardGillVector3Factory;
