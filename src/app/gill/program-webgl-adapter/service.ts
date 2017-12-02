import gillProgramWebglServiceAdapterFactory  from "app/gill/program-webgl-adapter/service/factory";

import gillWebglService                       from "app/gill/webgl/service";

const gillProgramWebglServiceAdapter  = gillProgramWebglServiceAdapterFactory.construct(
                                          gillWebglService
                                        );

export default gillProgramWebglServiceAdapter;
