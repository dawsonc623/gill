import GillProgramSource  from "lib/gill/program/source.type";

interface GillProgramSourceFactory
{
  construct(
    vertexShaderShaderSource    : string,
    fragmentShaderShaderSource  : string
  ): GillProgramSource;
}

export default GillProgramSourceFactory;
