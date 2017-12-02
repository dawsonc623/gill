import gillWebglVariableTypeMapFactory  from "app/gill/program/variable/type-map/factory";
import gillWebglVariableTypeFactory     from "app/gill/program/variable/type/factory";

const gillWebglVariableTypeMap  = gillWebglVariableTypeMapFactory.construct();

// Add types

gillWebglVariableTypeMap.setWebglVariableType(
  35664,  // gl.FLOAT_VEC2
  gillWebglVariableTypeFactory.construct(
    5126,         // gl.FLOAT based on "gl.FLOAT_VEC2"
    Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
    2,            // Each element will be 2 indices based on "gl.FLOAT_VEC2"
  )
);

gillWebglVariableTypeMap.setWebglVariableType(
  35665,  // gl.FLOAT_VEC3
  gillWebglVariableTypeFactory.construct(
    5126,         // gl.FLOAT
    Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
    3             // Each element will be 3 indices based on "gl.FLOAT_VEC3"
  )
);

gillWebglVariableTypeMap.setWebglVariableType(
  5126,           // gl.FLOAT
  gillWebglVariableTypeFactory.construct(
    5126,         // gl.FLOAT
    Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
    1             // Each element will be 1 index based on "gl.FLOAT"
  )
);

export default gillWebglVariableTypeMap;
