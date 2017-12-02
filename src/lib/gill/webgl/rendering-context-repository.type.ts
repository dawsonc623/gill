interface WebglRenderingContextRepository
{
  getWebglRenderingContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext;
}

export default WebglRenderingContextRepository;
