import IndexData                        from "lib/gill/model/index-collection.type";
import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import Model                            from "lib/gill/model.type";
import TextureDataRepository            from "lib/gill/model/texture-data/repository.type";
import GillUniformValueMap              from "lib/gill/model/uniform-value-map.type";

interface GillModelFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    indices                           : IndexData,
    textureDataRepository             : TextureDataRepository,
    uniformValues                     : GillUniformValueMap
  ): Model;
}

export default GillModelFactory;
