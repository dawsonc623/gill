"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/attribute/collection/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/webgl/typed-array/float32-array/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _service = require("app/gill/webgl/program/service");

var _service2 = _interopRequireDefault(_service);

var _factory5 = require("app/gill/webgl/service/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/webgl/uniform/collection/factory");

var _factory8 = _interopRequireDefault(_factory7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglService = _factory6.default.construct(_factory2.default, _service2.default, _factory8.default);
// Set up attribute types
webglService.setAttributeType(35664, // gl.FLOAT_VEC2
5126, // gl.FLOAT
// gl.FLOAT
_factory4.default, 2, true, // Whether or not the data is normalized
0, // The span between the start of each attribute value
0 // The starting index for the first attribute value
);
webglService.setAttributeType(35665, // gl.FLOAT_VEC3
5126, _factory4.default, 3, true, // Whether or not the data is normalized
0, // The span between the start of each attribute value
0 // The starting index for the first attribute value
);
// Set up uniform types
webglService.setUniformType(5126, // gl.FLOAT
"f", // uniformXfv
1);
exports.default = webglService;