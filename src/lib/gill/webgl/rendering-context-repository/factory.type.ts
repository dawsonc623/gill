import WebglRenderingContextRepository  from "lib/gill/webgl/rendering-context-repository.type";

interface WebglRenderingContextRepositoryFactory
{
  construct(): WebglRenderingContextRepository;
}

export default WebglRenderingContextRepositoryFactory;
