import Model                            from "lib/gill/model.type";
import AttributeData                    from "lib/gill/model/attribute-data.type";
import AttributeValue                   from "lib/gill/model/attribute-value.type";
import GillModelAttributeDataCache      from "lib/gill/model/attribute-data/cache.type";
import GillModelAttributeDataFactory    from "lib/gill/model/attribute-data/factory.type";
import GillModelAttributeDataRepository from "lib/gill/model/attribute-data/repository.type";

class StandardGillModelAttributeDataRepository implements GillModelAttributeDataRepository
{
  constructor(
    private gillModelAttributeDataCache   : GillModelAttributeDataCache,
    private gillModelAttributeDataFactory : GillModelAttributeDataFactory
  ) {

  }

  getAttributeData(
    model         : Model,
    attributeName : string
  ): AttributeData
  {
    const hasAttributeData  = this.gillModelAttributeDataCache.hasAttributeData(
                                model,
                                attributeName
                              );
    let attributeData;

    if (hasAttributeData)
    {
      attributeData = this.gillModelAttributeDataCache.getAttributeData(
                        model,
                        attributeName
                      );
    }
    else
    {
      attributeData = this.gillModelAttributeDataFactory.construct(
                        //TODO Do not hardcode?
                        [],     //TODO Should there be a collection here? The starting data
                        false,  // Whether or not the data has changed since last buffer
                        true,   // Whether or not the data is normalized
                        0,      // The starting index for the first attribute value
                        0       // The span between the start of each attribute value
                      );

      this.gillModelAttributeDataCache.setAttributeData(
        model,
        attributeName,
        attributeData
      );
    }

    return  attributeData;
  }

  setValueAt(
    model           : Model,
    attributeName   : string,
    index           : number,
    attributeValue  : AttributeValue
  ): void
  {
    const attributeData = this.getAttributeData(
                            model,
                            attributeName
                          );

    attributeData.setValueAt(
      index,
      attributeValue
    );
  }
}

export default StandardGillModelAttributeDataRepository;
