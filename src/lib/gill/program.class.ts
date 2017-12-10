import Attribute                    from "lib/gill/program/attribute.type";
import AttributeCollection          from "lib/gill/program/attribute/collection.type";
import GillProgram                  from "lib/gill/program.type";
import Uniform                      from "lib/gill/program/uniform.type";
import Texture                      from "lib/gill/program/texture.type";
import TextureCollection            from "lib/gill/program/texture/collection.type";
import GillProgramUniformCollection from "lib/gill/program/uniform/collection.type";

class StandardGillProgram implements GillProgram
{
  constructor(
    private webglRenderingContext : WebGLRenderingContext,
    private webglProgram          : WebGLProgram,
    private attributes            : AttributeCollection,
    private textures              : TextureCollection,
    private uniforms              : GillProgramUniformCollection
  ) {

  }

  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void
  {
    this.textures.eachTexture(
      action
    );
  }

  forEachAttribute(
    action  : (
      attribute : Attribute
    ) => void
  ): void
  {
    this.attributes.eachAttribute(
      action
    );
  }

  forEachUniform(
    action  : (
      attribute : Uniform
    ) => void
  ): void
  {
    this.uniforms.eachUniform(
      action
    );
  }

  getWebglProgram(): WebGLProgram
  {
    return  this.webglProgram;
  }

  getWebglRenderingContext(): WebGLRenderingContext
  {
    return  this.webglRenderingContext;
  }
}

export default StandardGillProgram;
