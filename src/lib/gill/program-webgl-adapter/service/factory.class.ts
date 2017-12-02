import ProgramWebglService                from "lib/gill/program/webgl/service.type";
import ProgramWebglServiceAdapterFactory  from "lib/gill/program-webgl-adapter/service/factory.type";
import StandardProgramWebglServiceAdapter from "lib/gill/program-webgl-adapter/service.class";
import WebglService                       from "lib/gill/webgl/service.type";

class StandardProgramWebglServiceAdapterFactory implements ProgramWebglServiceAdapterFactory
{
  construct(
    webglService  : WebglService
  ): ProgramWebglService
  {
    return  new StandardProgramWebglServiceAdapter(
              webglService
            );
  }
}

export default StandardProgramWebglServiceAdapterFactory;
