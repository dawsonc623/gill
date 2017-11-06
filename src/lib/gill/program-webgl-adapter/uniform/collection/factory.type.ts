import GillProgramWebglUniformCollection  from "lib/gill/program/webgl/uniform/collection.type";
import GillWebglUniformCollection         from "lib/gill/webgl/uniform/collection.type";

interface GillProgramWebglUniformCollectionAdapterFactory
{
  construct(
    gillWebglUniformCollection  : GillWebglUniformCollection
  ): GillProgramWebglUniformCollection;
}

export default GillProgramWebglUniformCollectionAdapterFactory;
