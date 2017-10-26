import GillProgram        from "lib/gill/program.type";
import GillProgramCache   from "lib/gill/program/cache.type";
import GillProgramFactory from "lib/gill/program/factory.type";
import GillProgramService from "lib/gill/program/service.type";
import GillProgramSource  from "lib/gill/program/source.type";
import GillWebglService   from "lib/gill/webgl/service.type";

class StandardGillProgramService implements GillProgramService
{
  constructor(
    private gillProgramCache    : GillProgramCache,
    private gillProgramFactory  : GillProgramFactory,
    private gillWebglService    : GillWebglService
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
      const webglProgram    = this.gillWebglService.getWebglProgram(
                                webglRenderingContext,
                                gillProgramSource.getVertexShaderSource(),
                                gillProgramSource.getFragmentShaderSource()
                              );

      const attributeCount  = webglRenderingContext.getProgramParameter(
                                webglProgram,
                                webglRenderingContext.ACTIVE_ATTRIBUTES
                              );

      const attributes  = this.gillWebglService.constructAttributeCollection();

      for (let index = 0; index < attributeCount; index += 1)
      {
        attributes.addAttribute(
          this.gillWebglService.getAttribute(
            webglRenderingContext,
            webglProgram,
            index
          )
        );
      }

      const uniformCount  = webglRenderingContext.getProgramParameter(
                              webglProgram,
                              webglRenderingContext.ACTIVE_UNIFORMS
                            );

      const uniforms  = this.gillWebglService.constructUniformCollection();

      for (let index = 0; index < uniformCount; index += 1)
      {
        uniforms.addUniform(
          this.gillWebglService.getUniform(
            webglRenderingContext,
            webglProgram,
            index
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
