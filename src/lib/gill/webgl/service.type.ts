import GillTypedArrayFactory        from "lib/gill/webgl/typed-array/factory.type";
import GillWebglAttribute           from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection from "lib/gill/webgl/attribute/collection.type";
import GillWebglUniform             from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection   from "lib/gill/webgl/uniform/collection.type";

interface GillWebglService
{
  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillWebglAttributeCollection;

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillWebglUniformCollection;

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
