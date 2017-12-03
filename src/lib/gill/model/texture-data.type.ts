import TextureValue from "lib/gill/model/texture-value.type";

interface TextureData
{
  getFormat(): GLenum;

  getPixels(): TextureValue;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;
}

export default TextureData;
