import GillChangedAttributeMap          from "lib/gill/model/changed-attribute-map.type";
import GillChangedAttributeMapFactory   from "lib/gill/model/changed-attribute-map/factory.type";
import StandardGillChangedAttributeMap  from "lib/gill/model/changed-attribute-map.class";

class StandardGillChangedAttributeMapFactory implements GillChangedAttributeMapFactory
{
  construct(): GillChangedAttributeMap
  {
    return  new StandardGillChangedAttributeMap();
  }
}

export default StandardGillChangedAttributeMapFactory;
