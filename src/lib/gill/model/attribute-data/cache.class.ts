import AttributeData      from "lib/gill/model/attribute-data.type";
import AttributeDataCache from "lib/gill/model/attribute-data/cache.type";
import Model              from "lib/gill/model.type";

class StandardGillModelAttributeDataCache implements AttributeDataCache
{
  private attributeData : Map<
                            Model,
                            Map<
                              string,
                              AttributeData
                            >
                          >;

  constructor()
  {
    this.attributeData  = new Map<
                            Model,
                            Map<
                              string,
                              AttributeData
                            >
                          >();
  }

  getAttributeData(
    model : Model,
    name  : string
  ): AttributeData
  {
    const hasAttributes = this.attributeData.has(
                            model
                          );

    let attributes,
        hasAttributeData  = false;

    if (hasAttributes)
    {
      attributes  = this.attributeData.get(
                      model
                    );

      hasAttributeData  = attributes.has(
                            name
                          );
    }

    if(!hasAttributeData)
    {
      throw new Error(
              `Attribute '${name}' not found in cache`
            );
    }

    return  attributes.get(
              name
            );
  }

  hasAttributeData(
    model : Model,
    name  : string
  ): boolean
  {
    const hasAttributes = this.attributeData.has(
                            model
                          );

    let hasAttributeData  = false;

    if (hasAttributes)
    {
      const attributes  = this.attributeData.get(
                            model
                          );

      hasAttributeData  = attributes.has(
                            name
                          );
    }

    return  hasAttributeData;
  }

  setAttributeData(
    model : Model,
    name  : string,
    data  : AttributeData
  ): void
  {
    const hasAttributes = this.attributeData.has(
                            model
                          );

    let attributes;

    if (hasAttributes)
    {
      attributes  = this.attributeData.get(
                      model
                    );
    }
    else
    {
      attributes  = new Map<
                      string,
                      AttributeData
                    >();

      this.attributeData.set(
        model,
        attributes
      );
    }

    attributes.set(
      name,
      data
    );
  }
}

export default StandardGillModelAttributeDataCache;
