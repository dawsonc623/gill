import GillProgramWebglUniform            from "lib/gill/program/webgl/uniform.type";
import GillProgramWebglUniformCollection  from "lib/gill/program/webgl/uniform/collection.type";
import GillWebglUniformCollection         from "lib/gill/webgl/uniform/collection.type";

class GillProgramWebglUniformCollectionAdapter implements GillProgramWebglUniformCollection
{
  constructor(
    private gillWebglUniformCollection  : GillWebglUniformCollection
  ) {

  }

  eachUniform(
    action  : (
      uniform : GillProgramWebglUniform
    ) => void
  ): void
  {
    this.gillWebglUniformCollection.forEachUniform(
      action
    );
  }
}

export default GillProgramWebglUniformCollectionAdapter;
