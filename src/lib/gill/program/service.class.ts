import AttributeCollectionFactory from "lib/gill/program/attribute/collection/factory.type";
import AttributeFactory           from "lib/gill/program/attribute/factory.type";
import GillProgram                from "lib/gill/program.type";
import GillProgramCache           from "lib/gill/program/cache.type";
import GillProgramFactory         from "lib/gill/program/factory.type";
import GillProgramService         from "lib/gill/program/service.type";
import GillProgramSource          from "lib/gill/program/source.type";
import ProgramWebglService        from "lib/gill/program/webgl/service.type";
import TextureCollectionFactory   from "lib/gill/program/texture/collection/factory.type";
import TextureFactory             from "lib/gill/program/texture/factory.type";
import UniformCollectionFactory   from "lib/gill/program/uniform/collection/factory.type";
import UniformFactory             from "lib/gill/program/uniform/factory.type";
import VariableTypeMap            from "lib/gill/program/variable/type-map.type";

class StandardGillProgramService implements GillProgramService
{
  constructor(
    private attributeCollectionFactory  : AttributeCollectionFactory,
    private attributeFactory            : AttributeFactory,
    private gillProgramCache            : GillProgramCache,
    private gillProgramFactory          : GillProgramFactory,
    private gillProgramWebglService     : ProgramWebglService,
    private textureCollectionFactory    : TextureCollectionFactory,
    private textureFactory              : TextureFactory,
    private uniformCollectionFactory    : UniformCollectionFactory,
    private uniformFactory              : UniformFactory,
    private variableTypes               : VariableTypeMap
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
            textures      = this.textureCollectionFactory.construct(),
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

        const isSampler2d   = uniform.type  === webglRenderingContext.SAMPLER_2D,
              isSamplerCube = uniform.type  === webglRenderingContext.SAMPLER_CUBE;

        if (isSampler2d || isSamplerCube)
        {
          let bindTarget,
              imageTarget;

          if (isSampler2d)
          {
            bindTarget  = webglRenderingContext.TEXTURE_2D;
          }
          else
          {
            bindTarget  = webglRenderingContext.TEXTURE_CUBE_MAP;
          }

          if (isSampler2d)
          {
            imageTarget = webglRenderingContext.TEXTURE_2D;
          }
          else
          {
            imageTarget = 0; //TODO I am not sure how this would even work...
          }

          textures.addTexture(
            this.textureFactory.construct(
              bindTarget,
              imageTarget,
              location,
              uniform.name,
              this.variableTypes.getWebglVariableType(
                uniform.type
              )
            )
          );
        }
        else
        {
          uniforms.addUniform(
            this.uniformFactory.construct(
              uniform.name,
              this.variableTypes.getWebglVariableType(uniform.type),
              location
            )
          );
        }
      }

      program = this.gillProgramFactory.construct(
                  webglRenderingContext,
                  webglProgram,
                  attributes,
                  textures,
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
