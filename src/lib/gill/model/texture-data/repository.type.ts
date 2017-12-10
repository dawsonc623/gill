import Model        from "lib/gill/model.type";
import TextureData  from "lib/gill/model/texture-data.type";
import TextureValue from "lib/gill/model/texture-value.type";

interface TextureDataRepository
{
  getData(
    model : Model,
    name  : string
  ): TextureData;

  setValue(
    model : Model,
    name  : string,
    value : TextureValue
  ): void;
}

export default TextureDataRepository;
