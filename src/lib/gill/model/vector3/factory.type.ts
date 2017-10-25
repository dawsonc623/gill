import GillVector3  from "lib/gill/model/vector3.type";

interface GillVector3Factory
{
  construct(
    v1  : number,
    v2  : number,
    v3  : number
  ): GillVector3;
}

export default GillVector3Factory;
