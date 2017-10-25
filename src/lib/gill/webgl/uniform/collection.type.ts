import GillUniform  from "lib/gill/webgl/uniform.type";

interface GillUniformCollection
{
  addUniform(
    uniform : GillUniform
  ): void;

  forEachUniform(
    action  : (
      uniform : GillUniform
    ) => void
  ): void;
}

export default GillUniformCollection;
