import webglBufferRenderingContexts     from "app/gill/webgl/buffer-rendering-context-map";
import webglProgramFactory              from "app/gill/webgl/program/factory";
import webglProgramRenderingContexts    from "app/gill/webgl/program-rendering-context-map";
import webglRenderingContextRepository  from "app/gill/webgl/rendering-context-repository";
import webglServiceFactory              from "app/gill/webgl/service/factory";
import webglShaderFactory               from "app/gill/webgl/shader/factory";

const webglService  = webglServiceFactory.construct(
                        webglBufferRenderingContexts,
                        webglProgramFactory,
                        webglProgramRenderingContexts,
                        webglRenderingContextRepository,
                        webglShaderFactory
                      );

export default webglService;