import TextureData          from "lib/gill/model/texture-data.type";
import TextureDataFactory   from "lib/gill/model/texture-data/factory.type";
import TextureValue         from "lib/gill/model/texture-value.type";
import StandardTextureData  from "lib/gill/model/texture-data.class";

class StandardTextureDataFactory implements TextureDataFactory
{
  construct(
    format  : GLenum,
    pixels  : TextureValue
  ): TextureData
  {
    return  new StandardTextureData(
              format,
              pixels
            );
  }
}

export default StandardTextureDataFactory;
