import GillProgram              from "lib/gill/program.type";
import GillProgramCache         from "lib/gill/program/cache.type";
import GillProgramFactory       from "lib/gill/program/factory.type";
import GillProgramService       from "lib/gill/program/service.type";
import GillProgramSource        from "lib/gill/program/source.type";
import GillProgramWebglService  from "lib/gill/program/webgl/service.type";

class StandardGillProgramService implements GillProgramService
{
  constructor(
    private gillProgramCache        : GillProgramCache,
    private gillProgramFactory      : GillProgramFactory,
    private gillProgramWebglService : GillProgramWebglService
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
      const webglProgram  = this.gillProgramWebglService.getWebglProgram(
                              webglRenderingContext,
                              gillProgramSource.getVertexShaderSource(),
                              gillProgramSource.getFragmentShaderSource()
                            );

      const attributes  = this.gillProgramWebglService.getAttributes(
                            webglRenderingContext,
                            webglProgram
                          ),
            uniforms    = this.gillProgramWebglService.getUniforms(
                            webglRenderingContext,
                            webglProgram
                          );

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
