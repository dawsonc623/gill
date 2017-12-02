import WebglRenderingContextRepository          from "lib/gill/webgl/rendering-context-repository.type";
import WebglRenderingContextRepositoryFactory   from "lib/gill/webgl/rendering-context-repository/factory.type";
import StandardWebglRenderingContextRepository  from "lib/gill/webgl/rendering-context-repository.class";

class StandardGillWebglRenderingContextRepositoryFactory implements WebglRenderingContextRepositoryFactory
{
  construct(): WebglRenderingContextRepository
  {
    return  new StandardWebglRenderingContextRepository();
  }
}

export default StandardGillWebglRenderingContextRepositoryFactory;
