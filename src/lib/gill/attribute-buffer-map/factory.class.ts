import GillAttributeBufferMap         from "lib/gill/attribute-buffer-map.type";
import GillAttributeBufferMapFactory  from "lib/gill/attribute-buffer-map/factory.type";
import StandardGillAttributeBufferMap from "lib/gill/attribute-buffer-map.class";

class StandardGillAttributeBufferMapFactory implements GillAttributeBufferMapFactory
{
  construct(): GillAttributeBufferMap
  {
    return  new StandardGillAttributeBufferMap();
  }
}

export default StandardGillAttributeBufferMapFactory;
