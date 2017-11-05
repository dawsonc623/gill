import GillWebglUniform from "lib/gill/webgl/uniform.type";

interface GillWebglUniformCollection
{
  addUniform(
    uniform : GillWebglUniform
  ): void;

  forEachUniform(
    action  : (
      uniform : GillWebglUniform
    ) => void
  ): void;
}

export default GillWebglUniformCollection;
