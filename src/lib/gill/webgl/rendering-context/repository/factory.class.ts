import GillWebglRenderingContextRepository          from "lib/gill/webgl/rendering-context/repository.type";
import GillWebglRenderingContextRepositoryFactory   from "lib/gill/webgl/rendering-context/repository/factory.type";
import StandardGillWebglRenderingContextRepository  from "lib/gill/webgl/rendering-context/repository.class";

class StandardGillWebglRenderingContextRepositoryFactory implements GillWebglRenderingContextRepositoryFactory
{
  construct(): GillWebglRenderingContextRepository
  {
    return  new StandardGillWebglRenderingContextRepository();
  }
}

export default StandardGillWebglRenderingContextRepositoryFactory;
