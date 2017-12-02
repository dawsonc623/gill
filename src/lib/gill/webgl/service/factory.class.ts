import StandardWebglService             from "lib/gill/webgl/service.class";
import WebglBufferRenderingContextMap   from "lib/gill/webgl/buffer-rendering-context-map.type";
import WebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import WebglProgramRenderingContextMap  from "lib/gill/webgl/program-rendering-context-map.type";
import WebglRenderingContextRepository  from "lib/gill/webgl/rendering-context-repository.type";
import WebglService                     from "lib/gill/webgl/service.type";
import WebglServiceFactory              from "lib/gill/webgl/service/factory.type";
import WebglShaderFactory               from "lib/gill/webgl/shader/factory.type";

class StandardWebglServiceFactory implements WebglServiceFactory
{
  construct(
    webglBufferRenderingContexts    : WebglBufferRenderingContextMap,
    webglProgramFactory             : WebglProgramFactory,
    webglProgramRenderingContexts   : WebglProgramRenderingContextMap,
    webglRenderingContextRepository : WebglRenderingContextRepository,
    webglShaderFactory              : WebglShaderFactory
  ): WebglService
  {
    return  new StandardWebglService(
              webglBufferRenderingContexts,
              webglProgramFactory,
              webglProgramRenderingContexts,
              webglRenderingContextRepository,
              webglShaderFactory
            );
  }
}

export default StandardWebglServiceFactory;
