import Uniform           from "lib/gill/program/uniform.type";
import UniformCollection from "lib/gill/program/uniform/collection.type";

class StandardUniformCollection implements UniformCollection
{
  private uniforms  : Array<Uniform>;

  constructor()
  {
    this.uniforms = new Array<Uniform>();
  }

  addUniform(
    uniform : Uniform
  ): void
  {
    this.uniforms.push(
      uniform
    );
  }

  eachUniform(
    action  : (
      uniform : Uniform
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

export default StandardUniformCollection;
