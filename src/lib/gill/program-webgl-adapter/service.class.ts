import ProgramWebglService  from "lib/gill/program/webgl/service.type";
import WebglService         from "lib/gill/webgl/service.type";

class ProgramWebglServiceAdapter  implements ProgramWebglService
{
  constructor(
    private webglService  : WebglService
  ) {

  }

  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    return  this.webglService.createWebglProgram(
              webglRenderingContext,
              vertexShaderSource,
              fragmentShaderSource
            );
  }

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>
  {
    return  this.webglService.getAttributes(
              webglRenderingContext,
              webglProgram
            );
  }

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>
  {
    return  this.webglService.getUniforms(
              webglRenderingContext,
              webglProgram
            );
  }
}

export default ProgramWebglServiceAdapter;
