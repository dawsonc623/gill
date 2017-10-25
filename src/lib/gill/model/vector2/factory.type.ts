import GillVector2  from "lib/gill/model/vector2.type";

interface GillVector2Factory
{
  construct(
    v1  : number,
    v2  : number
  ): GillVector2;
}

export default GillVector2Factory;
