import Model              from "lib/gill/model.type";
import GillNumber         from "lib/gill/model/number.type";
import GillProgramSource  from "lib/gill/program/source.type";
import Renderable         from "lib/gill/renderer/renderable.type";
import GillVector2        from "lib/gill/model/vector2.type";
import GillVector3        from "lib/gill/model/vector3.type";
import GillVertex         from "lib/gill/model/vertex.type";

interface GillService
{
  clearCanvas(
    canvas  : HTMLCanvasElement
  ): void;

  createModel(): Model;

  createNumber(
    value : number
  ): GillNumber;

  createVector2(
    v1  : number,
    v2  : number
  ): GillVector2;

  createVector3(
    v1  : number,
    v2  : number,
    v3  : number
  ): GillVector3;

  createVertex(): GillVertex;

  getProgram(
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): GillProgramSource;

  render(
    model             : Renderable,
    canvas            : HTMLCanvasElement,
    gillProgramSource : GillProgramSource
  ): void;
}

export default GillService;
