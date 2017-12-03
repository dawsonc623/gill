import Model  from "lib/gill/model.type";

interface ModelTextureRepository
{
  getTexture(
    model                 : Model,
    name                  : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLTexture;
}

export default ModelTextureRepository;
