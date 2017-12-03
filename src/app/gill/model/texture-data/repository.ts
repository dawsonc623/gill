import textureDataRepositoryFactory from "app/gill/model/texture-data/repository/factory";

import textureDataFactory from "app/gill/model/texture-data/factory";

const textureDataRepository = textureDataRepositoryFactory.construct(
                                textureDataFactory
                              );

export default textureDataRepository;
