import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillChangedAttributeMap          from "lib/gill/model/changed-attribute-map.type";
import GillIndexCollection              from "lib/gill/model/index-collection.type";
import GillModel                        from "lib/gill/model.type";
import GillModelFactory                 from "lib/gill/model/factory.type";
import GillUniformValueMap              from "lib/gill/model/uniform-value-map.type";
import GillVertexCollection             from "lib/gill/model/vertex/collection.type";
import StandardGillModel                from "lib/gill/model.class";

class StandardGillModelFactory implements GillModelFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    changedAttributes                 : GillChangedAttributeMap,
    indices                           : GillIndexCollection,
    uniformValues                     : GillUniformValueMap,
    vertices                          : GillVertexCollection
  ): GillModel
  {
    return  new StandardGillModel(
              gillModelAttributeDataRepository,
              changedAttributes,
              indices,
              uniformValues,
              vertices
            );
  }
}

export default StandardGillModelFactory;
