"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/typed-array/float32-array/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/webgl/attribute/collection/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/webgl/attribute/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/webgl/attribute/type/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _map = require("app/gill/webgl/attribute/type/map");

var _map2 = _interopRequireDefault(_map);

var _factory9 = require("app/gill/webgl/program/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/gill/webgl/service/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _factory13 = require("app/gill/webgl/uniform/collection/factory");

var _factory14 = _interopRequireDefault(_factory13);

var _factory15 = require("app/gill/webgl/uniform/factory");

var _factory16 = _interopRequireDefault(_factory15);

var _factory17 = require("app/gill/webgl/uniform/type/factory");

var _factory18 = _interopRequireDefault(_factory17);

var _map3 = require("app/gill/webgl/uniform/type/map");

var _map4 = _interopRequireDefault(_map3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglService = _factory12.default.construct(_factory10.default, _factory4.default, _factory6.default, _factory8.default, _map2.default, _factory14.default, _factory16.default, _factory18.default, _map4.default);
//TODO Move this to map instantiation
// Set up attribute types
webglService.setAttributeType(35664, // gl.FLOAT_VEC2
5126, // gl.FLOAT
// gl.FLOAT
_factory2.default, 2, true, // Whether or not the data is normalized
0 // The span between the start of each attribute value
);
webglService.setAttributeType(35665, // gl.FLOAT_VEC3
5126, _factory2.default, 3, true, // Whether or not the data is normalized
0 // The span between the start of each attribute value
);
//TODO Move this to map instantiation
// Set up uniform types
webglService.setUniformType(5126, // gl.FLOAT
"f", // uniformXfv
1);
exports.default = webglService;