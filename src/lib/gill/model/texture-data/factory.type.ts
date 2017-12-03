import TextureData  from "lib/gill/model/texture-data.type";
import TextureValue from "lib/gill/model/texture-value.type";

interface TextureDataFactory
{
  construct(
    format  : GLenum,
    pixels  : TextureValue
  ): TextureData;
}

export default TextureDataFactory;
