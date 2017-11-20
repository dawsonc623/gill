import GillModelAttributeData from "lib/gill/model/attribute-data.type";
import GillUniformValue       from "lib/gill/model/uniform-value.type";
import GillVertex             from "lib/gill/model/vertex.type";

interface GillModel
{
  addVertex(
    vertex  : GillVertex
  ): this;

  getAttributeData(
    attributeName : string
  ): GillModelAttributeData;

  getBufferIndices(): boolean;

  getIndexData(): Array<number>;

  getUniformData(
    uniformName : string
  ): Array<number>;

  setBufferIndices(
    indicesChanged: boolean
  ): void;

  setUniform(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): this;
}

export default GillModel;
