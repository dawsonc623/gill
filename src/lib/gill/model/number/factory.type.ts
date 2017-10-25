import GillNumber from "lib/gill/model/number.type";

interface GillNumberFactory
{
  construct(
    value : number
  ): GillNumber;
}

export default GillNumberFactory;
