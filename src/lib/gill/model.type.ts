import AttributeData    from "lib/gill/model/attribute-data.type";
import TextureData      from "lib/gill/model/texture-data.type";
import TextureValue     from "lib/gill/model/texture-value.type";
import GillUniformValue from "lib/gill/model/uniform-value.type";
import GillVertex       from "lib/gill/model/vertex.type";

interface GillModel
{
  addVertex(
    vertex  : GillVertex
  ): this;

  getAttributeData(
    attributeName : string
  ): AttributeData;

  getBufferIndices(): boolean;

  getIndexData(): Array<number>;

  getTextureData(
    name  : string
  ): TextureData;

  getUniformData(
    uniformName : string
  ): Array<number>;

  setBufferIndices(
    indicesChanged: boolean
  ): void;

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

export default GillModel;
