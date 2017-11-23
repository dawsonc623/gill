import GillProgramWebglAttributeCollection                from "lib/gill/program/webgl/attribute/collection.type";
import GillProgramWebglAttributeCollectionAdapterFactory  from "lib/gill/program-webgl-adapter/attribute/collection/factory.type";
import GillProgramWebglUniformCollection                  from "lib/gill/program/webgl/uniform/collection.type";
import GillProgramWebglUniformCollectionAdapterFactory    from "lib/gill/program-webgl-adapter/uniform/collection/factory.type";
import GillProgramWebglService                            from "lib/gill/program/webgl/service.type";
import GillWebglService                                   from "lib/gill/webgl/service.type";

class GillProgramWebglServiceAdapter  implements GillProgramWebglService
{
  constructor(
    private gillProgramWebglAttributeCollectionAdapterFactory : GillProgramWebglAttributeCollectionAdapterFactory,
    private gillProgramWebglUniformCollectionAdapterFactory   : GillProgramWebglUniformCollectionAdapterFactory,
    private gillWebglService                                  : GillWebglService
  ) {

  }

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillProgramWebglAttributeCollection
  {
    const attributes  = this.gillWebglService.getAttributes(
                          webglRenderingContext,
                          webglProgram
                        );

    return  this.gillProgramWebglAttributeCollectionAdapterFactory.construct(
              attributes
            );
  }

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillProgramWebglUniformCollection
  {
    const uniforms  = this.gillWebglService.getUniforms(
                          webglRenderingContext,
                          webglProgram
                        );

    return  this.gillProgramWebglUniformCollectionAdapterFactory.construct(
              uniforms
            );
  }

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    return  this.gillWebglService.createWebglProgram(
              webglRenderingContext,
              vertexShaderSource,
              fragmentShaderSource
            );
  }
}

export default GillProgramWebglServiceAdapter;
