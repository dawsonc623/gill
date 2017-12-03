import TextureData  from "lib/gill/model/texture-data.type";
import TextureValue from "lib/gill/model/texture-value.type";

class StandardTextureData implements TextureData
{
  private hasChanged  : boolean;

  constructor(
    private format  : GLenum,
    private pixels  : TextureValue
  ) {
    this.hasChanged = true;
  }

  getFormat(): GLenum
  {
    return  this.format;
  }

  getPixels(): TextureValue
  {
    return  this.pixels;
  }

  needsBuffered(): boolean
  {
    return  this.hasChanged;
  }

  setNeedsBuffered(
    needsBuffered : boolean
  ): void
  {
    this.hasChanged = needsBuffered;
  }
}

export default StandardTextureData;
