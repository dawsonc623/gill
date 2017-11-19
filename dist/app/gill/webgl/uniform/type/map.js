"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/uniform/type/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/webgl/uniform/type/map/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglUniformTypeMap = _factory4.default.construct();
// Set up uniform types
gillWebglUniformTypeMap.setUniformType(5126, // gl.FLOAT
_factory2.default.construct("f", // uniformXfv
1));
exports.default = gillWebglUniformTypeMap;