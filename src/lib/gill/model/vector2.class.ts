import GillVector2  from "lib/gill/model/vector2.type";

class StandardGillVector2 implements GillVector2
{
  constructor(
    private v1  : number,
    private v2  : number
  ) {

  }

  addToAttributeData(
    attributeData : Array<number>
  ) : void
  {
    attributeData.push(
      this.v1
    );

    attributeData.push(
      this.v2
    );
  }

  toUniformData() : Array<number>
  {
    return  [
              this.v1,
              this.v2
            ];
  }
}

export default StandardGillVector2;
