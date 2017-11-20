import GillModelAttributeData       from "lib/gill/model/attribute-data.type";
import GillModelAttributeDataCache  from "lib/gill/model/attribute-data/cache.type";

class StandardGillModelAttributeDataCache implements GillModelAttributeDataCache
{
  private attributeData : Map<string, GillModelAttributeData>;

  constructor()
  {
    this.attributeData  = new Map<string, GillModelAttributeData>();
  }

  getAttributeData(
    attributeName : string
  ): GillModelAttributeData
  {
    const hasAttributeData  = this.attributeData.has(
                                attributeName
                              );

    if (!hasAttributeData)
    {
      throw new Error(
              `Attribute '${attributeName}' not found in cache`
            );
    }

    return  this.attributeData.get(
              attributeName
            );
  }

  hasAttributeData(
    attributeName : string
  ): boolean
  {
    return  this.attributeData.has(
              attributeName
            );
  }

  setAttributeData(
    attributeName : string,
    attributeData : GillModelAttributeData
  ): void
  {
    this.attributeData.set(
      attributeName,
      attributeData
    );
  }
}

export default StandardGillModelAttributeDataCache;
