import Renderable from "lib/gill/renderer/renderable.type";

interface GillRenderer
{
  render(
    renderable : Renderable
  ): void;
}

export default GillRenderer;
