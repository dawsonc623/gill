import AttributeData  from "lib/gill/model/attribute-data.type";
import IndexData      from "lib/gill/model/index-collection.type";
import TextureData    from "lib/gill/model/texture-data.type";

interface Renderable
{
  getAttributeData(
    attributeName : string
  ): AttributeData;

  getIndexData(): IndexData;

  getTextureData(
    name  : string
  ): TextureData;

  getUniformData(
    uniformName : string
  ): Array<number>;
}

export default Renderable;
