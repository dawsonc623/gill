import GillModelBufferMap         from "lib/gill/model-buffer-map.type";
import GillModelBufferMapFactory  from "lib/gill/model-buffer-map/factory.type";
import StandardGillModelBufferMap from "lib/gill/model-buffer-map.class";

class StandardGillModelBufferMapFactory implements GillModelBufferMapFactory
{
  construct(): GillModelBufferMap
  {
    return  new StandardGillModelBufferMap();
  }
}

export default StandardGillModelBufferMapFactory;
