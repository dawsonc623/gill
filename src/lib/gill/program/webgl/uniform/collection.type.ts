import GillProgramWebglUniform  from "lib/gill/program/webgl/uniform.type";

interface GillWebglUniformCollection
{
  // addUniform(
  //   uniform : GillProgramWebglUniform
  // ): void;

  eachUniform(
    action  : (
      uniform : GillProgramWebglUniform
    ) => void
  ): void;
}

export default GillWebglUniformCollection;
