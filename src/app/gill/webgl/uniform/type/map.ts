import gillWebglUniformTypeFactory    from "app/gill/webgl/uniform/type/factory";
import gillWebglUniformTypeMapFactory from "app/gill/webgl/uniform/type/map/factory";

const gillWebglUniformTypeMap = gillWebglUniformTypeMapFactory.construct();

// Set up uniform types

gillWebglUniformTypeMap.setUniformType(
  5126, // gl.FLOAT
  gillWebglUniformTypeFactory.construct(
    "f",  // uniformXfv
    1
  )
);

export default gillWebglUniformTypeMap;
