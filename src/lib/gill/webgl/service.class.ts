import WebglBufferRenderingContextMap   from "lib/gill/webgl/buffer-rendering-context-map.type";
import WebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import WebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.type";
import WebglRenderingContextRepository  from "lib/gill/webgl/rendering-context-repository.type";
import WebglService                     from "lib/gill/webgl/service.type";
import WebglShaderFactory               from "lib/gill/webgl/shader/factory.type";

class StandardWebglService implements WebglService
{
  constructor(
    private webglBufferRenderingContexts    : WebglBufferRenderingContextMap,
    private webglProgramFactory             : WebglProgramFactory,
    private webglProgramRenderingContexts   : WebglProgramRenderingContextMap,
    private webglRenderingContextRepository : WebglRenderingContextRepository,
    private webglShaderFactory              : WebglShaderFactory
  ) {

  }

  createWebglBuffer(
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer
  {
    const webglBuffer = webglRenderingContext.createBuffer();

    this.webglBufferRenderingContexts.setWebglRenderingContext(
      webglBuffer,
      webglRenderingContext
    );

    return  webglBuffer;
  }

  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    const fragmentShader  = this.webglShaderFactory.construct(
            webglRenderingContext,
            fragmentShaderSource,
            webglRenderingContext.FRAGMENT_SHADER
          ),
          vertexShader    = this.webglShaderFactory.construct(
            webglRenderingContext,
            vertexShaderSource,
            webglRenderingContext.VERTEX_SHADER
          );

    const webglProgram  = this.webglProgramFactory.construct(
                            webglRenderingContext,
                            vertexShader,
                            fragmentShader
                          );

    this.webglProgramRenderingContexts.setWebglRenderingContext(
      webglProgram,
      webglRenderingContext
    );

    return  webglProgram;
  }

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>
  {

    const attributeCount  = webglRenderingContext.getProgramParameter(
                              webglProgram,
                              webglRenderingContext.ACTIVE_ATTRIBUTES
                            );

    const attributes  = new Array<WebGLActiveInfo>(
                          attributeCount
                        );

    for (
      let attributeIndex = 0;
      attributeIndex < attributeCount;
      attributeIndex += 1
    ) {
      attributes[attributeIndex]  = webglRenderingContext.getActiveAttrib(
                                      webglProgram,
                                      attributeIndex
                                    );
    }

    return  attributes;
  }

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>
  {
    const uniformCount  = webglRenderingContext.getProgramParameter(
                            webglProgram,
                            webglRenderingContext.ACTIVE_UNIFORMS
                          );

    const uniforms  = new Array<WebGLActiveInfo>(
                        uniformCount
                      );

    for (
      let uniformIndex = 0;
      uniformIndex < uniformCount;
      uniformIndex += 1
    ) {
      uniforms[uniformIndex]  = webglRenderingContext.getActiveUniform(
                                  webglProgram,
                                  uniformIndex
                                );
    }

    return  uniforms;
  }

  getWebglContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext
  {
    return  this.webglRenderingContextRepository.getWebglRenderingContext(
              canvas
            );
  }
}

export default StandardWebglService;
