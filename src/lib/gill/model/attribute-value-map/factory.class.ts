import GillAttributeValueMap          from "lib/gill/model/attribute-value-map.type";
import GillAttributeValueMapFactory   from "lib/gill/model/attribute-value-map/factory.type";
import StandardGillAttributeValueMap  from "lib/gill/model/attribute-value-map.class";

class StandardGillAttributeValueMapFactory implements GillAttributeValueMapFactory
{
  construct(): GillAttributeValueMap
  {
    return  new StandardGillAttributeValueMap();
  }
}

export default StandardGillAttributeValueMapFactory;
