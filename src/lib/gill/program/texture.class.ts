import Texture      from "lib/gill/program/texture.type";
import VariableType from "lib/gill/program/variable/type.type";

class StandardTexture implements Texture
{
  constructor(
    private bindTarget  : GLenum,
    private imageTarget : GLenum,
    private location    : WebGLUniformLocation,
    private name        : string,
    private type        : VariableType
  ) {

  }

  getBindTarget(): GLenum
  {
    return  this.bindTarget;
  }

  getImageTarget(): GLenum
  {
    return  this.imageTarget;
  }

  getLocation(): WebGLUniformLocation
  {
    return  this.location;
  }

  getName(): string
  {
    return  this.name;
  }

  getType(): VariableType
  {
    return  this.type;
  }
}

export default StandardTexture;
