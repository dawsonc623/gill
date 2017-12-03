import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillIndexCollection              from "lib/gill/model/index-collection.type";
import GillModel                        from "lib/gill/model.type";
import TextureDataRepository            from "lib/gill/model/texture-data/repository.type";
import GillUniformValueMap              from "lib/gill/model/uniform-value-map.type";

interface GillModelFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    indices                           : GillIndexCollection,
    textureDataRepository             : TextureDataRepository,
    uniformValues                     : GillUniformValueMap
  ): GillModel;
}

export default GillModelFactory;
