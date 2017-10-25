import GillTypedArrayFactory        from "lib/gill/webgl/typed-array/factory.type";
import GillWebglAttribute           from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection from "lib/gill/webgl/attribute/collection.type";
import GillWebglUniform             from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection   from "lib/gill/webgl/uniform/collection.type";

interface GillWebglService
{
  //TODO Rename to "create*Collection"
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

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  setAttributeType(
    webglType         : number, //TODO Constrain to WebGLActiveInfo.type values, whatever those are
    dataType          : number, //TODO Constrain to WebGL type constants
    typedArrayFactory : GillTypedArrayFactory,
    dataSize          : number
  ): void;

  setUniformType(
    webglType : number, //TODO Constrain to WebGLActiveInfo.type values, whatever those are
    dataType  : string, //TODO Constrain to uniform strings? (e.g. "i" | "f")
    dataSize  : number
  ): void;
}

export default GillWebglService;
