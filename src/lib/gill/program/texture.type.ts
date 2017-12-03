import VariableType from "lib/gill/program/variable/type.type";

interface Texture
{
  getBindTarget(): GLenum;

  getImageTarget(): GLenum;

  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): VariableType;
}

export default Texture;
