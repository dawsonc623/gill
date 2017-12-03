import Model                  from "lib/gill/model.type";
import ModelTextureRepository from "lib/gill/model-texture-repository.type";
import WebglService           from "lib/gill/webgl/service.type";

class StandardModelTextureRepository implements ModelTextureRepository
{
    private modelTextures : Map<
                              Model,
                              Map<
                                string,
                                WebGLTexture
                              >
                            >;
  constructor(
    private webglService  : WebglService
  ) {
    this.modelTextures  = new Map<
                            Model,
                            Map<
                              string,
                              WebGLTexture
                            >
                          >();
  }

  getTexture(
    model                 : Model,
    name                  : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLTexture
  {
    const hasTextures = this.modelTextures.has(
                          model
                        );

    let textures,
        hasTexture  = false;

    if (hasTextures)
    {
      textures  = this.modelTextures.get(
                    model
                  );

      hasTexture  = textures.has(
                      name
                    );
    }
    else
    {
      textures  = new Map<
                    string,
                    WebGLTexture
                  >();

      this.modelTextures.set(
        model,
        textures
      );
    }

    let texture;

    if (hasTexture)
    {
      texture = textures.get(
                  name
                );
    }
    else
    {
      texture = this.webglService.createWebglTexture(
                  webglRenderingContext
                );

      textures.set(
        name,
        texture
      );
    }

    return  texture;
  }
}

export default StandardModelTextureRepository;
