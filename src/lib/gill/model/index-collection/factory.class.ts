import IndexData          from "lib/gill/model/index-collection.type";
import IndexDataFactory   from "lib/gill/model/index-collection/factory.type";
import StandardIndexData  from "lib/gill/model/index-collection.class";

class StandardIndexDataFactory implements IndexDataFactory
{
  construct(): IndexData
  {
    return  new StandardIndexData();
  }
}

export default StandardIndexDataFactory;
