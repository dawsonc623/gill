"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program/variable/type-map/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/variable/type/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglVariableTypeMap = _factory2.default.construct();
// Add types
gillWebglVariableTypeMap.setWebglVariableType(35664, // gl.FLOAT_VEC2
_factory4.default.construct(5126, // gl.FLOAT based on "gl.FLOAT_VEC2"
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
2));
gillWebglVariableTypeMap.setWebglVariableType(35665, // gl.FLOAT_VEC3
_factory4.default.construct(5126, // gl.FLOAT
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
3 // Each element will be 3 indices based on "gl.FLOAT_VEC3"
));
gillWebglVariableTypeMap.setWebglVariableType(5126, // gl.FLOAT
_factory4.default.construct(5126, // gl.FLOAT
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
1 // Each element will be 1 index based on "gl.FLOAT"
));
exports.default = gillWebglVariableTypeMap;