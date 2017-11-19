import gillWebglAttributeTypeMapFactory from "app/gill/webgl/attribute/type/map/factory";
import gillWebglAttributeTypeFactory    from "app/gill/webgl/attribute/type/factory";
import gillWebglFloat32ArrayFactory     from "app/gill/webgl/typed-array/float32-array/factory";

const gillWebglAttributeTypeMap = gillWebglAttributeTypeMapFactory.construct();

// Set up attribute types

gillWebglAttributeTypeMap.setAttributeType(
  35664,  // gl.FLOAT_VEC2
  gillWebglAttributeTypeFactory.construct(
    5126,   // gl.FLOAT based on "gl.FLOAT_VEC2"
    gillWebglFloat32ArrayFactory, // Data will be an array of FLOATs (based on "gl.FLOAT")
    2,      // Each element will be 2 indices based on "gl.FLOAT_VEC2"
    true,   // Whether or not the data is normalized
    0,      // The span between the start of each attribute value
    0       // The starting index for the first attribute value
  )
);

gillWebglAttributeTypeMap.setAttributeType(
  35665,  // gl.FLOAT_VEC3
  gillWebglAttributeTypeFactory.construct(
    5126,   // gl.FLOAT
    gillWebglFloat32ArrayFactory,
    3,
    true,   // Whether or not the data is normalized
    0,      // The span between the start of each attribute value
    0       // The starting index for the first attribute value
  )
);

export default gillWebglAttributeTypeMap;
