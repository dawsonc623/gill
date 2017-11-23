import GillWebglAttribute                   from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection         from "lib/gill/webgl/attribute/collection.type";
import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import GillWebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.type";
import GillWebglProgramService              from "lib/gill/webgl/program/service.type";
import GillWebglRenderingContextRepository  from "lib/gill/webgl/rendering-context/repository.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglUniform                     from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection           from "lib/gill/webgl/uniform/collection.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";

class StandardGillWebglService implements GillWebglService
{
  constructor(
    private gillWebglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    private gillWebglProgramFactory             : GillWebglProgramFactory,
    private gillWebglProgramRenderingContexts   : GillWebglProgramRenderingContextMap,
    private gillWebglProgramService             : GillWebglProgramService,
    private gillWebglRenderingContextRepository : GillWebglRenderingContextRepository,
    private gillWebglUniformCollectionFactory   : GillWebglUniformCollectionFactory,
  ) {

  }

  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    const webglProgram  = this.gillWebglProgramFactory.construct(
                            webglRenderingContext,
                            vertexShaderSource,
                            fragmentShaderSource
                          );

    this.gillWebglProgramRenderingContexts.setWebglRenderingContext(
      webglProgram,
      webglRenderingContext
    );

    return  webglProgram;
  }

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillWebglAttributeCollection
  {

    const attributeCount  = webglRenderingContext.getProgramParameter(
                              webglProgram,
                              webglRenderingContext.ACTIVE_ATTRIBUTES
                            );

    const attributes  = this.gillWebglAttributeCollectionFactory.construct();

    for (let index = 0; index < attributeCount; index += 1)
    {
      attributes.addAttribute(
        this.gillWebglProgramService.getAttribute(
          webglRenderingContext,
          webglProgram,
          index
        )
      );
    }

    return  attributes;
  }

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillWebglUniformCollection
  {
    const uniformCount  = webglRenderingContext.getProgramParameter(
                            webglProgram,
                            webglRenderingContext.ACTIVE_UNIFORMS
                          );

    const uniforms  = this.gillWebglUniformCollectionFactory.construct();

    for (let index = 0; index < uniformCount; index += 1)
    {
      uniforms.addUniform(
        this.gillWebglProgramService.getUniform(
          webglRenderingContext,
          webglProgram,
          index
        )
      );
    }

    return  uniforms;
  }

  getWebglContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext
  {
    return  this.gillWebglRenderingContextRepository.getWebglRenderingContext(
              canvas
            );
  }
}

export default StandardGillWebglService;
