import GillModelBufferMap from "lib/gill/model-buffer-map.type";
import Model              from "lib/gill/model.type";
import GillBuffer         from "lib/gill/buffer.type";

class StandardGillModelBufferMap implements GillModelBufferMap
{
  private gillModelBuffers : Map<Model, GillBuffer>;

  constructor()
  {
    this.gillModelBuffers = new Map<Model, GillBuffer>();
  }

  eachBuffer(
    action  : (
      gillModel   : Model,
      gillBuffer  : GillBuffer
    ) => void
  ): void
  {
    for (
      let [
        gillModel,
        gillBuffer
      ]
      of this.gillModelBuffers
    ) {
      action(
        gillModel,
        gillBuffer
      );
    }
  }

  hasBuffer(
    gillModel : Model
  ): boolean
  {
    return  this.gillModelBuffers.has(
              gillModel
            );
  }

  getBuffer(
    gillModel : Model
  ): GillBuffer
  {
    return  this.gillModelBuffers.get(
              gillModel
            );
  }

  setBuffer(
    gillModel   : Model,
    gillBuffer  : GillBuffer
  ): void
  {
    this.gillModelBuffers.set(
      gillModel,
      gillBuffer
    );
  }
}

export default StandardGillModelBufferMap;
