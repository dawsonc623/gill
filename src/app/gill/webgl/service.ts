import gillWebglAttributeCollectionFactory  from "app/gill/webgl/attribute/collection/factory";
import gillWebglFloat32ArrayFactory         from "app/gill/webgl/typed-array/float32-array/factory";
import gillWebglProgramService              from "app/gill/webgl/program/service";
import gillWebglServiceFactory              from "app/gill/webgl/service/factory";
import gillWebglUniformCollectionFactory    from "app/gill/webgl/uniform/collection/factory";

const webglService  = gillWebglServiceFactory.construct(
                        gillWebglAttributeCollectionFactory,
                        gillWebglProgramService,
                        gillWebglUniformCollectionFactory
                      );

// Set up attribute types

webglService.setAttributeType(
  35664,  // gl.FLOAT_VEC2
  5126,   // gl.FLOAT
  gillWebglFloat32ArrayFactory,
  2,
  true,   // Whether or not the data is normalized
  0,      // The span between the start of each attribute value
  0       // The starting index for the first attribute value
);

webglService.setAttributeType(
  35665,  // gl.FLOAT_VEC3
  5126,   // gl.FLOAT
  gillWebglFloat32ArrayFactory,
  3,
  true,   // Whether or not the data is normalized
  0,      // The span between the start of each attribute value
  0       // The starting index for the first attribute value
);

// Set up uniform types

webglService.setUniformType(
  5126, // gl.FLOAT
  "f",  // uniformXfv
  1
);

export default webglService;