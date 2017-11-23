import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillIndexCollection              from "lib/gill/model/index-collection.type";
import GillModel                        from "lib/gill/model.type";
import GillModelFactory                 from "lib/gill/model/factory.type";
import GillUniformValueMap              from "lib/gill/model/uniform-value-map.type";
import StandardGillModel                from "lib/gill/model.class";

class StandardGillModelFactory implements GillModelFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    indices                           : GillIndexCollection,
    uniformValues                     : GillUniformValueMap
  ): GillModel
  {
    return  new StandardGillModel(
              gillModelAttributeDataRepository,
              indices,
              uniformValues
            );
  }
}

export default StandardGillModelFactory;
