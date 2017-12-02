import AttributeCollectionFactory from "lib/gill/program/attribute/collection/factory.type";
import AttributeFactory           from "lib/gill/program/attribute/factory.type";
import GillProgram                from "lib/gill/program.type";
import GillProgramCache           from "lib/gill/program/cache.type";
import GillProgramFactory         from "lib/gill/program/factory.type";
import GillProgramService         from "lib/gill/program/service.type";
import GillProgramSource          from "lib/gill/program/source.type";
import GillProgramWebglService    from "lib/gill/program/webgl/service.type";
import UniformCollectionFactory   from "lib/gill/program/uniform/collection/factory.type";
import UniformFactory             from "lib/gill/program/uniform/factory.type";
import WebglVariableTypeMap       from "lib/gill/program/variable/type-map.type";

class StandardGillProgramService implements GillProgramService
{
  constructor(
    private attributeCollectionFactory  : AttributeCollectionFactory,
    private attributeFactory            : AttributeFactory,
    private gillProgramCache            : GillProgramCache,
    private gillProgramFactory          : GillProgramFactory,
    private gillProgramWebglService     : GillProgramWebglService,
    private uniformCollectionFactory    : UniformCollectionFactory,
    private uniformFactory              : UniformFactory,
    private variableTypes               : WebglVariableTypeMap
  ) {

  }

  getProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource
  ): GillProgram
  {
    const programExists = this.gillProgramCache.hasProgram(
                            webglRenderingContext,
                            gillProgramSource
                          );

    let program;

    if (programExists)
    {
      program = this.gillProgramCache.getProgram(
                  webglRenderingContext,
                  gillProgramSource
                );
    }
    else
    {
      const webglProgram  = this.gillProgramWebglService.createWebglProgram(
                              webglRenderingContext,
                              gillProgramSource.getVertexShaderSource(),
                              gillProgramSource.getFragmentShaderSource()
                            );

      const attributeInfo = this.gillProgramWebglService.getAttributes(
                              webglRenderingContext,
                              webglProgram
                            ),
            attributes    = this.attributeCollectionFactory.construct(),
            uniformInfo   = this.gillProgramWebglService.getUniforms(
                              webglRenderingContext,
                              webglProgram
                            ),
            uniforms      = this.uniformCollectionFactory.construct();

      for (
        let attribute of attributeInfo
      ) {
        const location  = webglRenderingContext.getAttribLocation(
                            webglProgram,
                            attribute.name
                          );

        webglRenderingContext.enableVertexAttribArray(
          location
        );

        attributes.addAttribute(
          this.attributeFactory.construct(
            attribute.name,
            this.variableTypes.getWebglVariableType(attribute.type),
            location,
            webglRenderingContext.STATIC_DRAW
          )
        );
      }

      for (
        let uniform of uniformInfo
      ) {
        const location  = webglRenderingContext.getUniformLocation(
                            webglProgram,
                            uniform.name
                          );

        uniforms.addUniform(
          this.uniformFactory.construct(
            uniform.name,
            this.variableTypes.getWebglVariableType(uniform.type),
            location
          )
        );
      }

      program = this.gillProgramFactory.construct(
                  webglRenderingContext,
                  webglProgram,
                  attributes,
                  uniforms
                );

      this.gillProgramCache.cacheProgram(
        webglRenderingContext,
        gillProgramSource,
        program
      );
    }

    return program;
  }
}

export default StandardGillProgramService;
