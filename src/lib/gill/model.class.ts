import AttributeData            from "lib/gill/model/attribute-data.type";
import AttributeDataRepository  from "lib/gill/model/attribute-data/repository.type";
import GillModelAttributeValue  from "lib/gill/model/attribute-value.type";
import GillIndexCollection      from "lib/gill/model/index-collection.type";
import GillModel                from "lib/gill/model.type";
import TextureData              from "lib/gill/model/texture-data.type";
import TextureDataRepository    from "lib/gill/model/texture-data/repository.type";
import TextureValue             from "lib/gill/model/texture-value.type";
import GillUniformValue         from "lib/gill/model/uniform-value.type";
import GillUniformValueMap      from "lib/gill/model/uniform-value-map.type";
import GillVertex               from "lib/gill/model/vertex.type";

class StandardGillModel implements GillModel
{
  private indicesChanged  : boolean;

  constructor(
    private attributeDataRepository : AttributeDataRepository,
    private indices                 : GillIndexCollection,
    private textureDataRepository   : TextureDataRepository,
    private uniformValues           : GillUniformValueMap
  ) {
    this.indicesChanged = false;
  }

  addVertex(
    vertex  : GillVertex
  ): this
  {
    this.indices.addIndex(
      this.indices.indexCount()
    );

    this.indicesChanged = true;

    vertex.eachAttribute(
      (
        attributeName   : string,
        attributeValue  : GillModelAttributeValue
      ) =>
      {
        //TODO Change this to follow the pattern used by the texture repository
        const attributeData = this.attributeDataRepository.getAttributeData(
                                this,
                                attributeName
                              );

        attributeData.addAttributeValue(
          attributeValue
        );
      }
    );

    return  this;
  }

  getAttributeData(
    attributeName : string
  ): AttributeData
  {
    return  this.attributeDataRepository.getAttributeData(
              this,
              attributeName
            );
  }

  getBufferIndices(): boolean
  {
    return  this.indicesChanged;
  }

  getIndexData(): Array<number>
  {
    return  this.indices.toArray();
  }

  getTextureData(
    name  : string
  ): TextureData
  {
    return  this.textureDataRepository.getData(
              this,
              name
            );
  }

  getUniformData(
    uniformName : string
  ): Array<number>
  {
    return  this.uniformValues.getValue(
              uniformName
            )
            .toUniformData();
  }

  setBufferIndices(
    indicesChanged: boolean
  ): void
  {
    this.indicesChanged = indicesChanged;
  }

  setTexture(
    name  : string,
    value : TextureValue
  ): this
  {
    this.textureDataRepository.setValue(
      this,
      name,
      value
    );

    return  this;
  }

  setUniform(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): this
  {
    this.uniformValues.setValue(
      uniformName,
      uniformValue
    );

    return  this;
  }

  setVertex(
    index   : number,
    vertex  : GillVertex
  ): this
  {
    vertex.eachAttribute(
      (
        attributeName   : string,
        attributeValue  : GillModelAttributeValue
      ) =>
      {
        this.attributeDataRepository.setValueAt(
          this,
          attributeName,
          index,
          attributeValue
        );
      }
    );

    return  this;
  }
}

export default StandardGillModel;
