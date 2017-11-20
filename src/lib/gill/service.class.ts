import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillAttributeValueMapFactory     from "lib/gill/model/attribute-value-map/factory.type";
import GillChangedAttributeMapFactory   from "lib/gill/model/changed-attribute-map/factory.type";
import GillIndexCollectionFactory       from "lib/gill/model/index-collection/factory.type";
import GillModelBufferService           from "lib/gill/model-buffer-service.type";
import GillModel                        from "lib/gill/model.type";
import GillModelFactory                 from "lib/gill/model/factory.type";
import GillNumber                       from "lib/gill/model/number.type";
import GillNumberFactory                from "lib/gill/model/number/factory.type";
import GillProgramSource                from "lib/gill/program/source.type";
import GillProgramSourceFactory         from "lib/gill/program/source/factory.type";
import GillRendererService              from "lib/gill/renderer/service.type";
import GillService                      from "lib/gill/service.type";
import GillUniformValueMapFactory       from "lib/gill/model/uniform-value-map/factory.type";
import GillVector2                      from "lib/gill/model/vector2.type";
import GillVector2Factory               from "lib/gill/model/vector2/factory.type";
import GillVector3                      from "lib/gill/model/vector3.type";
import GillVector3Factory               from "lib/gill/model/vector3/factory.type";
import GillVertex                       from "lib/gill/model/vertex.type";
import GillVertexCollectionFactory      from "lib/gill/model/vertex/collection/factory.type";
import GillVertexFactory                from "lib/gill/model/vertex/factory.type";
import GillWebglService                 from "lib/gill/webgl/service.type";


class StandardGillService implements GillService
{
  constructor(
    private gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    private gillAttributeValueMapFactory      : GillAttributeValueMapFactory,
    private gillChangedAttributeMapFactory    : GillChangedAttributeMapFactory,
    private gillIndexCollectionFactory        : GillIndexCollectionFactory,
    private gillModelBufferService            : GillModelBufferService,
    private gillModelFactory                  : GillModelFactory,
    private gillNumberFactory                 : GillNumberFactory,
    private gillProgramSourceFactory          : GillProgramSourceFactory,
    private gillRendererService               : GillRendererService,
    private gillUniformValueMapFactory        : GillUniformValueMapFactory,
    private gillVector2Factory                : GillVector2Factory,
    private gillVector3Factory                : GillVector3Factory,
    private gillVertexCollectionFactory       : GillVertexCollectionFactory,
    private gillVertexFactory                 : GillVertexFactory,
    private gillWebglService                  : GillWebglService
  ) {

  }

  clearCanvas(
    canvas  : HTMLCanvasElement
  ): void
  {
    const webglRenderingContext = this.gillWebglService.getWebglContext(
                                    canvas
                                  );

    webglRenderingContext.clear(
      webglRenderingContext.COLOR_BUFFER_BIT |
      webglRenderingContext.DEPTH_BUFFER_BIT
    );
  }

  createModel(): GillModel
  {
    return  this.gillModelFactory.construct(
              this.gillModelAttributeDataRepository,
              this.gillChangedAttributeMapFactory.construct(),
              this.gillIndexCollectionFactory.construct(),
              this.gillUniformValueMapFactory.construct(),
              this.gillVertexCollectionFactory.construct()
            );
  }

  createNumber(
    value : number
  ): GillNumber
  {
    return  this.gillNumberFactory.construct(
              value
            );
  }

  createVector2(
    v1  : number,
    v2  : number
  ): GillVector2
  {
    return  this.gillVector2Factory.construct(
              v1,
              v2
            );
  }

  createVector3(
    v1  : number,
    v2  : number,
    v3  : number
  ): GillVector3
  {
    return  this.gillVector3Factory.construct(
              v1,
              v2,
              v3
            );
  }

  createVertex(): GillVertex
  {
    return  this.gillVertexFactory.construct(
              this.gillAttributeValueMapFactory.construct()
            );
  }

  getGillProgram(
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): GillProgramSource
  {
    return  this.gillProgramSourceFactory.construct(
              vertexShaderSource,
              fragmentShaderSource
            );
  }

  drawModel(
    model             : GillModel,
    canvas            : HTMLCanvasElement,
    gillProgramSource : GillProgramSource
  ): void
  {
    const webglRenderingContext = this.gillWebglService.getWebglContext(
                                    canvas
                                  );

    const gillRenderer  = this.gillRendererService.getRenderer(
                            webglRenderingContext,
                            this.gillModelBufferService,
                            gillProgramSource
                          );

    gillRenderer.drawModel(
      model
    );
  }
}

export default StandardGillService;
