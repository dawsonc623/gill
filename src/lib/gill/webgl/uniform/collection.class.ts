import GillUniform            from "lib/gill/webgl/uniform.type";
import GillUniformCollection  from "lib/gill/webgl/uniform/collection.type";

class StandardGillUniformCollection implements GillUniformCollection
{
  private uniforms  : Array<GillUniform>;

  constructor()
  {
    this.uniforms = new Array<GillUniform>();
  }

  addUniform(
    uniform : GillUniform
  ): void
  {
    this.uniforms.push(
      uniform
    );
  }

  forEachUniform(
    action  : (
      uniform : GillUniform
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

export default StandardGillUniformCollection;
