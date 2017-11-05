import GillWebglAttribute         from "lib/gill/webgl/attribute.type";
import GillWebglTypedArrayFactory from "lib/gill/webgl/typed-array/factory.type";
import GillWebglUniform           from "lib/gill/webgl/uniform.type";

interface GillWebglProgramService
{
  getAttribute(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributeIndex        : number
  ): GillWebglAttribute;

  getUniform(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    uniformIndex          : number
  ): GillWebglUniform;

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  setAttributeType(
    webglType         : number,
    dataType          : number,
    typedArrayFactory : GillWebglTypedArrayFactory,
    dataSize          : number,
    dataIsNormalized  : GLboolean,
    dataStride        : GLsizei,
    dataOffset        : GLintptr
  ): void;

  setUniformType(
    webglType : number,
    dataType  : string,
    dataSize  : number
  ): void;
}

export default GillWebglProgramService;
