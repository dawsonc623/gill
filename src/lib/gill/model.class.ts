import GillChangedAttributeMap  from "lib/gill/model/changed-attribute-map.type";
import GillIndexCollection      from "lib/gill/model/index-collection.type";
import GillModel                from "lib/gill/model.type";
import GillUniformValue         from "lib/gill/model/uniform-value.type";
import GillUniformValueMap      from "lib/gill/model/uniform-value-map.type";
import GillVertex               from "lib/gill/model/vertex.type";
import GillVertexCollection     from "lib/gill/model/vertex/collection.type";

class StandardGillModel implements GillModel
{
  private indicesChanged  : boolean;

  constructor(
    private changedAttributes : GillChangedAttributeMap,
    private indices           : GillIndexCollection,
    private uniformValues     : GillUniformValueMap,
    private vertices          : GillVertexCollection
  ) {
    this.indicesChanged = false;
  }

  addVertex(
    vertex  : GillVertex
  ): this
  {
    this.vertices.addVertex(
      vertex
    );

    this.indices.addIndex(
      this.indices.indexCount()
    );

    this.indicesChanged = true;

    this.changedAttributes.eachChanged(
      (
        attributeName     : string,
        attributeChanged  : boolean
      ) =>
      {
        this.changedAttributes.setChanged(
          attributeName,
          true
        );
      }
    );

    return  this;
  }

  getAttributeData(
    attributeName : string
  ): Array<number>
  {
    let attributeData = new Array<number>();

    this.vertices.eachVertex(
      (
        vertex  : GillVertex
      ) =>
      {
        vertex.getAttribute(
                attributeName
              )
              .addToAttributeData(
                attributeData
              );
      }
    );

    return  attributeData;
  }

  getBufferAttribute(
    attributeName : string
  ): boolean
  {
    const trackingAttribute = this.changedAttributes.hasChanged(
                                attributeName
                              );

    let rebufferAttribute = true;

    if (trackingAttribute)
    {
      rebufferAttribute = this.changedAttributes.getChanged(
                            attributeName
                          );
    }

    return  rebufferAttribute;
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

  setBufferAttribute(
    attributeName   : string,
    bufferAttribute : boolean
  ): void
  {
    this.changedAttributes.setChanged(
      attributeName,
      bufferAttribute
    );
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
