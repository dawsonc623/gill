import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillChangedAttributeMap          from "lib/gill/model/changed-attribute-map.type";
import GillIndexCollection              from "lib/gill/model/index-collection.type";
import GillModel                        from "lib/gill/model.type";
import GillUniformValueMap              from "lib/gill/model/uniform-value-map.type";
import GillVertexCollection             from "lib/gill/model/vertex/collection.type";

interface GillModelFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    changedAttributes                 : GillChangedAttributeMap,
    indices                           : GillIndexCollection,
    uniformValues                     : GillUniformValueMap,
    vertices                          : GillVertexCollection
  ): GillModel;
}

export default GillModelFactory;
