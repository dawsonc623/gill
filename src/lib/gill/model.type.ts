import AttributeData    from "lib/gill/model/attribute-data.type";
import IndexData        from "lib/gill/model/index-collection.type";
import TextureData      from "lib/gill/model/texture-data.type";
import TextureValue     from "lib/gill/model/texture-value.type";
import GillUniformValue from "lib/gill/model/uniform-value.type";
import GillVertex       from "lib/gill/model/vertex.type";

interface Model
{
  addVertex(
    vertex  : GillVertex
  ): this;

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

  setTexture(
    name    : string,
    texture : TextureValue
  ): this;

  setUniform(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): this;

  setVertex(
    index   : number,
    vertex  : GillVertex
  ): this;
}

export default Model;
