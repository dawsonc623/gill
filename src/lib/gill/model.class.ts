import GillModelAttributeData           from "lib/gill/model/attribute-data.type";
import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";
import GillModelAttributeValue          from "lib/gill/model/attribute-value.type";
import GillChangedAttributeMap          from "lib/gill/model/changed-attribute-map.type";
import GillIndexCollection              from "lib/gill/model/index-collection.type";
import GillModel                        from "lib/gill/model.type";
import GillUniformValue                 from "lib/gill/model/uniform-value.type";
import GillUniformValueMap              from "lib/gill/model/uniform-value-map.type";
import GillVertex                       from "lib/gill/model/vertex.type";
import GillVertexCollection             from "lib/gill/model/vertex/collection.type";

class StandardGillModel implements GillModel
{
  private indicesChanged  : boolean;

  constructor(
    private gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    private changedAttributes                 : GillChangedAttributeMap,
    private indices                           : GillIndexCollection,
    private uniformValues                     : GillUniformValueMap,
    private vertices                          : GillVertexCollection
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
        const attributeData = this.gillModelAttributeDataRepository.getAttributeData(
                                attributeName
                              );

        attributeData.addAttributeValue(
          attributeValue
        );
      }
    )

    return  this;
  }

  getAttributeData(
    attributeName : string
  ): GillModelAttributeData
  {
    return  this.gillModelAttributeDataRepository.getAttributeData(
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
}

export default StandardGillModel;
