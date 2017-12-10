import AttributeDataRepository  from "lib/gill/model/attribute-data/repository.type";
import AttributeValue           from "lib/gill/model/attribute-value.type";
import GillAttributeValueMap    from "lib/gill/model/attribute-value-map.type";
import Model                    from "lib/gill/model.type";
import GillVertex               from "lib/gill/model/vertex.type";

class StandardGillVertex implements GillVertex
{
  private models                  : Map<Model, Array<number>>;

  constructor(
    private attributeDataRepository : AttributeDataRepository,
    private gillAttributeValues     : GillAttributeValueMap
  ) {
    this.models = new Map<Model, Array<number>>();
  }

  addModelIndex(
    model : Model,
    index : number
  ): void
  {
    let indices = this.models.get(
                    model
                  );

    if (!indices)
    {
      indices = new Array<number>();

      this.models.set(
        model,
        indices
      );
    }

    indices.push(
      index
    );
  }

  eachAttribute(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void
  {
    this.gillAttributeValues.eachValue(
      action
    );
  }

  getAttribute(
    name  : string
  ): AttributeValue
  {
    return  this.gillAttributeValues.getValue(
              name
            );
  }

  setAttribute(
    name  : string,
    value : AttributeValue
  ): this
  {
    this.models.forEach(
      (indices, model) =>
      {
        indices.forEach(
          (index) =>
          {
            this.attributeDataRepository.setValueAt(
              model,
              name,
              index,
              value
            );
          }
        );
      }
    );

    this.gillAttributeValues.setValue(
      name,
      value
    );

    return  this;
  }
}

export default StandardGillVertex;
