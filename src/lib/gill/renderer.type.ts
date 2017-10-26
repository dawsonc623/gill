import GillModel  from "lib/gill/model.type";

interface GillRenderer
{
  drawModel(
    model : GillModel
  ): void;
}

export default GillRenderer;
