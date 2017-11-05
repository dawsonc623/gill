import GillWebglUniform           from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection from "lib/gill/webgl/uniform/collection.type";

class StandardGillWebglUniformCollection implements GillWebglUniformCollection
{
  private uniforms  : Array<GillWebglUniform>;

  constructor()
  {
    this.uniforms = new Array<GillWebglUniform>();
  }

  addUniform(
    uniform : GillWebglUniform
  ): void
  {
    this.uniforms.push(
      uniform
    );
  }

  forEachUniform(
    action  : (
      uniform : GillWebglUniform
    ) => void
  ): void
  {
    this.uniforms.forEach(
      (uniform) => {
        action(
          uniform
        );
      }
    );
  }
}

export default StandardGillWebglUniformCollection;
