import gillServiceFactory             from "app/gill/service/factory";

import gillAttributeValueMapFactory   from "app/gill/model/attribute-value-map/factory";
import gillChangedAttributeMapFactory from "app/gill/model/changed-attribute-map/factory";
import gillIndexCollectionFactory     from "app/gill/model/index-collection/factory";
import gillModelBufferService         from "app/gill/model-buffer-service";
import gillModelFactory               from "app/gill/model/factory";
import gillNumberFactory              from "app/gill/model/number/factory";
import gillProgramSourceFactory       from "app/gill/program/source/factory";
import gillRendererService            from "app/gill/renderer/service";
import gillUniformValueMapFactory     from "app/gill/model/uniform-value-map/factory";
import gillVector2Factory             from "app/gill/model/vector2/factory";
import gillVector3Factory             from "app/gill/model/vector3/factory";
import gillVertexCollectionFactory    from "app/gill/model/vertex/collection/factory";
import gillVertexFactory              from "app/gill/model/vertex/factory";
import gillWebglService               from "app/gill/webgl/service";

const gillService = gillServiceFactory.construct(
                      gillAttributeValueMapFactory,
                      gillChangedAttributeMapFactory,
                      gillIndexCollectionFactory,
                      gillModelBufferService,
                      gillModelFactory,
                      gillNumberFactory,
                      gillProgramSourceFactory,
                      gillRendererService,
                      gillUniformValueMapFactory,
                      gillVector2Factory,
                      gillVector3Factory,
                      gillVertexCollectionFactory,
                      gillVertexFactory,
                      gillWebglService
                    );

export default gillService;
