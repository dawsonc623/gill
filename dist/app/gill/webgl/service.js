"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/attribute/collection/factory");

var _factory2 = _interopRequireDefault(_factory);

var _bufferRenderingContextMap = require("app/gill/webgl/buffer-rendering-context-map");

var _bufferRenderingContextMap2 = _interopRequireDefault(_bufferRenderingContextMap);

var _factory3 = require("app/gill/webgl/program/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _programRenderingContextMap = require("app/gill/webgl/program-rendering-context-map");

var _programRenderingContextMap2 = _interopRequireDefault(_programRenderingContextMap);

var _service = require("app/gill/webgl/program/service");

var _service2 = _interopRequireDefault(_service);

var _repository = require("app/gill/webgl/rendering-context/repository");

var _repository2 = _interopRequireDefault(_repository);

var _factory5 = require("app/gill/webgl/service/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/webgl/uniform/collection/factory");

var _factory8 = _interopRequireDefault(_factory7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglService = _factory6.default.construct(_factory2.default, _bufferRenderingContextMap2.default, _factory4.default, _programRenderingContextMap2.default, _service2.default, _repository2.default, _factory8.default);
exports.default = webglService;