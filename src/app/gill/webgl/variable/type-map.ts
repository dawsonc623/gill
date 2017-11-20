import gillWebglFloat32ArrayFactory     from "app/gill/webgl/typed-array/float32-array/factory";
import gillWebglVariableTypeMapFactory  from "app/gill/webgl/variable/type-map/factory";
import gillWebglVariableTypeFactory     from "app/gill/webgl/variable/type/factory";

const gillWebglVariableTypeMap  = gillWebglVariableTypeMapFactory.construct();

// Add types

gillWebglVariableTypeMap.setWebglVariableType(
  35664,  // gl.FLOAT_VEC2
  gillWebglVariableTypeFactory.construct(
    5126,   // gl.FLOAT based on "gl.FLOAT_VEC2"
    gillWebglFloat32ArrayFactory, // Data will be an array of FLOATs (based on "gl.FLOAT")
    2,      // Each element will be 2 indices based on "gl.FLOAT_VEC2"
  )
);

gillWebglVariableTypeMap.setWebglVariableType(
  35665,  // gl.FLOAT_VEC3
  gillWebglVariableTypeFactory.construct(
    5126,   // gl.FLOAT
    gillWebglFloat32ArrayFactory,
    3
  )
);

gillWebglVariableTypeMap.setWebglVariableType(
  5126, // gl.FLOAT
  gillWebglVariableTypeFactory.construct(
    5126,   // gl.FLOAT
    gillWebglFloat32ArrayFactory,
    1
  )
);

export default gillWebglVariableTypeMap;
