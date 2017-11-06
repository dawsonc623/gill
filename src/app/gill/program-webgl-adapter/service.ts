import gillProgramWebglServiceAdapterFactory              from "app/gill/program-webgl-adapter/service/factory";

import gillProgramWebglAttributeCollectionAdapterFactory  from "app/gill/program-webgl-adapter/attribute/collection/factory";
import gillProgramWebglUniformCollectionAdapterFactory    from "app/gill/program-webgl-adapter/uniform/collection/factory";
import gillWebglService                                   from "app/gill/webgl/service";

const gillProgramWebglServiceAdapter  = gillProgramWebglServiceAdapterFactory.construct(
                                          gillProgramWebglAttributeCollectionAdapterFactory,
                                          gillProgramWebglUniformCollectionAdapterFactory,
                                          gillWebglService
                                        );

export default gillProgramWebglServiceAdapter;
