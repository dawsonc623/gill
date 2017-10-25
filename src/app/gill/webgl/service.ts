import float32ArrayFactory              from "app/gill/webgl/typed-array/float32-array/factory";
import webglAttributeCollectionFactory  from "app/gill/webgl/attribute/collection/factory";
import webglAttributeFactory            from "app/gill/webgl/attribute/factory";
import webglAttributeTypeFactory        from "app/gill/webgl/attribute/type/factory";
import webglAttributeTypeMap            from "app/gill/webgl/attribute/type/map";
import webglProgramFactory              from "app/gill/webgl/program/factory";
import webglServiceFactory              from "app/gill/webgl/service/factory";
import webglUniformCollectionFactory    from "app/gill/webgl/uniform/collection/factory";
import webglUniformFactory              from "app/gill/webgl/uniform/factory";
import webglUniformTypeFactory          from "app/gill/webgl/uniform/type/factory";
import webglUniformTypeMap              from "app/gill/webgl/uniform/type/map";

const webglService  = webglServiceFactory.construct(
                        webglProgramFactory,
                        webglAttributeCollectionFactory,
                        webglAttributeFactory,
                        webglAttributeTypeFactory,
                        webglAttributeTypeMap,
                        webglUniformCollectionFactory,
                        webglUniformFactory,
                        webglUniformTypeFactory,
                        webglUniformTypeMap
                      );

//TODO Move this to map instantiation
// Set up attribute types

webglService.setAttributeType(
  35664,  // gl.FLOAT_VEC2
  5126,   // gl.FLOAT
  float32ArrayFactory,
  2,
  true    // Whether or not the data is normalized
);

webglService.setAttributeType(
  35665,  // gl.FLOAT_VEC3
  5126,   // gl.FLOAT
  float32ArrayFactory,
  3,
  true    // Whether or not the data is normalized
);

//TODO Move this to map instantiation
// Set up uniform types

webglService.setUniformType(
  5126, // gl.FLOAT
  "f",  // uniformXfv
  1
);

export default webglService;