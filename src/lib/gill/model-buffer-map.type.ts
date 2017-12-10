import Model      from "lib/gill/model.type";
import GillBuffer from "lib/gill/buffer.type";

interface GillModelBufferMap
{
  eachBuffer(
    action  : (
      gillModel   : Model,
      gillBuffer  : GillBuffer
    ) => void
  ): void;

  hasBuffer(
    gillModel : Model,
  ): boolean;

  getBuffer(
    gillModel : Model,
  ): GillBuffer;

  setBuffer(
    gillModel   : Model,
    gillBuffer  : GillBuffer
  ): void;
}

export default GillModelBufferMap;
