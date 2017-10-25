import GillVector3  from "lib/gill/model/vector3.type";

class StandardGillVector3 implements GillVector3
{
  constructor(
    private v1  : number,
    private v2  : number,
    private v3  : number
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

    attributeData.push(
      this.v3
    );
  }

  toUniformData() : Array<number>
  {
    return  [
              this.v1,
              this.v2,
              this.v3
            ];
  }
}

export default StandardGillVector3;
