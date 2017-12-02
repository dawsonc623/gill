import ProgramWebglService  from "lib/gill/program/webgl/service.type";
import WebglService         from "lib/gill/webgl/service.type";

interface GillProgramWebglServiceAdapterFactory
{
  construct(
    webglService  : WebglService
  ): ProgramWebglService;
}

export default GillProgramWebglServiceAdapterFactory;
