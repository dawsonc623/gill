import GillNumber from "lib/gill/model/number.type";

class StandardGillNumber implements GillNumber
{
  constructor(
    private value : number
  ) {

  }

  addToAttributeData(
    attributeData : Array<number>
  ) : void
  {
    attributeData.push(
      this.value
    );
  }

  toUniformData() : Array<number>
  {
    return  [
              this.value
            ];
  }
}

export default StandardGillNumber;
