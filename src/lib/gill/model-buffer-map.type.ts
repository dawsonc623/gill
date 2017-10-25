import GillModel  from "lib/gill/model.type";
import GillBuffer from "lib/gill/buffer.type";

interface GillModelBufferMap
{
  eachBuffer(
    action  : (
      gillModel   : GillModel,
      gillBuffer  : GillBuffer
    ) => void
  ): void;

  hasBuffer(
    gillModel : GillModel,
  ): boolean;

  getBuffer(
    gillModel : GillModel,
  ): GillBuffer;

  setBuffer(
    gillModel   : GillModel,
    gillBuffer  : GillBuffer
  ): void;
}

export default GillModelBufferMap;
