import AttributeData            from "lib/gill/model/attribute-data.type";
import AttributeDataRepository  from "lib/gill/model/attribute-data/repository.type";
import IndexData                from "lib/gill/model/index-collection.type";
import GillModelAttributeValue  from "lib/gill/model/attribute-value.type";
import Model                    from "lib/gill/model.type";
import TextureData              from "lib/gill/model/texture-data.type";
import TextureDataRepository    from "lib/gill/model/texture-data/repository.type";
import TextureValue             from "lib/gill/model/texture-value.type";
import GillUniformValue         from "lib/gill/model/uniform-value.type";
import GillUniformValueMap      from "lib/gill/model/uniform-value-map.type";
import GillVertex               from "lib/gill/model/vertex.type";

class StandardModel implements Model
{
  constructor(
    private attributeDataRepository : AttributeDataRepository,
    private indices                 : IndexData,
    private textureDataRepository   : TextureDataRepository,
    private uniformValues           : GillUniformValueMap
  ) {

  }

  addVertex(
    vertex  : GillVertex
  ): this
  {
    const index = this.indices.indexCount();

    vertex.addModelIndex(this, index);

    this.indices.addIndex(
      index
    );

    vertex.eachAttribute(
      (
        attributeName   : string,
        attributeValue  : GillModelAttributeValue
      ) =>
      {
        //TODO Make sure this is not a performance bottleneck (array splicing versus array pushing internally)
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

  getAttributeData(
    attributeName : string
  ): AttributeData
  {
    return  this.attributeDataRepository.getAttributeData(
              this,
              attributeName
            );
  }

  getIndexData(): IndexData
  {
    return  this.indices;
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

export default StandardModel;
