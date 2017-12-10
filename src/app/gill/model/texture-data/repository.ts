import TextureDataRepository        from "lib/gill/model/texture-data/repository.type";

import textureDataFactory           from "app/gill/model/texture-data/factory";
import textureDataRepositoryFactory from "app/gill/model/texture-data/repository/factory";

const textureDataRepository = textureDataRepositoryFactory.construct(
                                textureDataFactory
                              );

export default textureDataRepository;
