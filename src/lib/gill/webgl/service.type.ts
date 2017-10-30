import GillTypedArrayFactory        from "lib/gill/webgl/typed-array/factory.type";
import GillWebglAttribute           from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection from "lib/gill/webgl/attribute/collection.type";
import GillWebglUniform             from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection   from "lib/gill/webgl/uniform/collection.type";

interface GillWebglService
{
  constructAttributeCollection(): GillWebglAttributeCollection;

  constructUniformCollection(): GillWebglUniformCollection;

  getAttribute(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributeIndex        : number
  ): GillWebglAttribute;

  getUniform(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    uniformIndex          : WebGLUniformLocation
  ): GillWebglUniform;

  getWebglContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext;

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  setAttributeType(
    webglType         : number,
    dataType          : number,
    typedArrayFactory : GillTypedArrayFactory,
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

export default GillWebglService;
