import GillUniformValue from "lib/gill/model/uniform-value.type";
import GillVertex       from "lib/gill/model/vertex.type";

interface GillModel
{
  addVertex(
    vertex  : GillVertex
  ): this;

  getAttributeData(
    attributeName : string
  ): Array<number>;

  getBufferAttribute(
    attributeName : string
  ): boolean;

  getBufferIndices(): boolean;

  getIndexData(): Array<number>;

  getUniformData(
    uniformName : string
  ): Array<number>;

  setBufferAttribute(
    attributeName   : string,
    bufferAttribute : boolean
  ): void;

  setBufferIndices(
    indicesChanged: boolean
  ): void;

  setUniform(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): this;
}

export default GillModel;
