interface GillWebglRenderingContextRepository
{
  getWebglRenderingContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext;
}

export default GillWebglRenderingContextRepository;
