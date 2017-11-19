"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/typed-array/float32-array/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/webgl/variable/type-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/webgl/variable/type/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglVariableTypeMap = _factory4.default.construct();
// Add types
gillWebglVariableTypeMap.setWebglVariableType(35664, // gl.FLOAT_VEC2
_factory6.default.construct(5126, // gl.FLOAT based on "gl.FLOAT_VEC2"
// gl.FLOAT
// gl.FLOAT
_factory2.default, // Data will be an array of FLOATs (based on "gl.FLOAT")
2));
//TODO Move to "value"-based data
// true,   // Whether or not the data is normalized
// 0,      // The span between the start of each attribute value
// 0       // The starting index for the first attribute value
gillWebglVariableTypeMap.setWebglVariableType(35665, // gl.FLOAT_VEC3
_factory6.default.construct(5126, _factory2.default, 3));
gillWebglVariableTypeMap.setWebglVariableType(5126, // gl.FLOAT
_factory6.default.construct(5126, _factory2.default, 1));
exports.default = gillWebglVariableTypeMap;