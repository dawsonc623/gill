import Model  from "lib/gill/model.type";

interface GillRenderer
{
  drawModel(
    model : Model
  ): void;
}

export default GillRenderer;
