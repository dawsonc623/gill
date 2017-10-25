import GillModelBufferMap from "lib/gill/model-buffer-map.type";
import GillModel          from "lib/gill/model.type";
import GillBuffer         from "lib/gill/buffer.type";

class StandardGillModelBufferMap implements GillModelBufferMap
{
  private gillModelBuffers : Map<GillModel, GillBuffer>;

  constructor()
  {
    this.gillModelBuffers = new Map<GillModel, GillBuffer>();
  }

  eachBuffer(
    action  : (
      gillModel   : GillModel,
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
    gillModel : GillModel
  ): boolean
  {
    return  this.gillModelBuffers.has(
              gillModel
            );
  }

  getBuffer(
    gillModel : GillModel
  ): GillBuffer
  {
    return  this.gillModelBuffers.get(
              gillModel
            );
  }

  setBuffer(
    gillModel   : GillModel,
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
