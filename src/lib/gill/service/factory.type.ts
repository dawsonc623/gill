import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillAttributeValueMapFactory     from "lib/gill/model/attribute-value-map/factory.type";
import GillChangedAttributeMapFactory   from "lib/gill/model/changed-attribute-map/factory.type";
import GillIndexCollectionFactory       from "lib/gill/model/index-collection/factory.type";
import GillModelBufferService           from "lib/gill/model-buffer-service.type";
import GillModelFactory                 from "lib/gill/model/factory.type";
import GillNumberFactory                from "lib/gill/model/number/factory.type";
import GillProgramSourceFactory         from "lib/gill/program/source/factory.type";
import GillRendererService              from "lib/gill/renderer/service.type";
import GillService                      from "lib/gill/service.type";
import GillUniformValueMapFactory       from "lib/gill/model/uniform-value-map/factory.type";
import GillVector2Factory               from "lib/gill/model/vector2/factory.type";
import GillVector3Factory               from "lib/gill/model/vector3/factory.type";
import GillVertexCollectionFactory      from "lib/gill/model/vertex/collection/factory.type";
import GillVertexFactory                from "lib/gill/model/vertex/factory.type";
import GillWebglService                 from "lib/gill/webgl/service.type";

interface GillServiceFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    gillAttributeValueMapFactory      : GillAttributeValueMapFactory,
    gillChangedAttributeMapFactory    : GillChangedAttributeMapFactory,
    gillIndexCollectionFactory        : GillIndexCollectionFactory,
    gillModelBufferService            : GillModelBufferService,
    gillModelFactory                  : GillModelFactory,
    gillNumberFactory                 : GillNumberFactory,
    gillProgramSourceFactory          : GillProgramSourceFactory,
    gillRendererService               : GillRendererService,
    gillUniformValueMapFactory        : GillUniformValueMapFactory,
    gillVector2Factory                : GillVector2Factory,
    gillVector3Factory                : GillVector3Factory,
    gillVertexCollectionFactory       : GillVertexCollectionFactory,
    gillVertexFactory                 : GillVertexFactory,
    gillWebglService                  : GillWebglService
  ): GillService;
}

export default GillServiceFactory;
