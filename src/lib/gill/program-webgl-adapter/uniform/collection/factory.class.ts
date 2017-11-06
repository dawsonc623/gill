import GillProgramWebglUniformCollection                from "lib/gill/program/webgl/uniform/collection.type";
import GillProgramWebglUniformCollectionAdapterFactory  from "lib/gill/program-webgl-adapter/uniform/collection/factory.type";
import GillWebglUniformCollection                       from "lib/gill/webgl/uniform/collection.type";
import StandardGillProgramUniformCollectionAdapter      from "lib/gill/program-webgl-adapter/uniform/collection.class";

class StandardGillProgramUniformCollectionAdapterFactory implements GillProgramWebglUniformCollectionAdapterFactory
{
  construct(
    gillWebglUniformCollection  : GillWebglUniformCollection
  ): GillProgramWebglUniformCollection
  {
    return  new StandardGillProgramUniformCollectionAdapter(
              gillWebglUniformCollection
            );
  }
}

export default StandardGillProgramUniformCollectionAdapterFactory;
