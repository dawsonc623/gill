import modelTextureRepositoryFactory  from "app/gill/model-texture-repository/factory";

import webglService                   from "app/gill/webgl/service";

const modelTextureRepository  = modelTextureRepositoryFactory.construct(
                                  webglService
                                );

export default modelTextureRepository;
