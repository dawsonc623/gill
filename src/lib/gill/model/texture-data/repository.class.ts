import Model                  from "lib/gill/model.type";
import TextureData            from "lib/gill/model/texture-data.type";
import TextureDataFactory     from "lib/gill/model/texture-data/factory.type";
import TextureDataRepository  from "lib/gill/model/texture-data/repository.type";
import TextureValue           from "lib/gill/model/texture-value.type";

class StandardTextureDataRepository implements TextureDataRepository
{
  private textureData : Map<
                          Model,
                          Map<
                            string,
                            TextureData
                          >
                        >;
  constructor(
    private textureDataFactory  : TextureDataFactory
  ) {
    this.textureData  = new Map<
                          Model,
                          Map<
                            string,
                            TextureData
                          >
                        >();
  }

  getData(
    model : Model,
    name  : string
  ): TextureData
  {
    const hasTextures = this.textureData.has(
                          model
                        );

    let textureData,
        hasTextureData  = false;

    if (hasTextures)
    {
      textureData = this.textureData.get(
                      model
                    );

      hasTextureData  = textureData.has(
                          name
                        );
    }

    if (!hasTextureData)
    {
      throw new Error(
              `Texture ${name} not found for model`
            );
    }

    return  textureData.get(
              name
            );
  }

  setValue(
    model : Model,
    name  : string,
    value : TextureValue
  ): void
  {
    const hasTextures = this.textureData.has(
                          model
                        );

    let textureData,
        hasTextureData  = false;

    if (hasTextures)
    {
      textureData = this.textureData.get(
                      model
                    );
    }
    else
    {
      textureData = new Map<
                      string,
                      TextureData
                    >();

      this.textureData.set(
        model,
        textureData
      );
    }

    textureData.set(
      name,
      this.textureDataFactory.construct(
        6408, //TODO Hard-coded RGBA - not sure how to get WebGL values in here, since WebGL does not come in at this point. May need to be a part of TextureValue, since it knows what the format of its data should be, presumably
        value
      )
    );
  }
}

export default StandardTextureDataRepository;
