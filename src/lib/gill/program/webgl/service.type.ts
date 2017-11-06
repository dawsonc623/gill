import GillProgramWebglAttributeCollection  from "lib/gill/program/webgl/attribute/collection.type";
import GillProgramWebglUniformCollection    from "lib/gill/program/webgl/uniform/collection.type";

interface GillProgramWebglService
{
  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillProgramWebglAttributeCollection;

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): GillProgramWebglUniformCollection;

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;
}

export default GillProgramWebglService;
