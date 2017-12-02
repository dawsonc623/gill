"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bufferRenderingContextMap = require("app/gill/webgl/buffer-rendering-context-map");

var _bufferRenderingContextMap2 = _interopRequireDefault(_bufferRenderingContextMap);

var _factory = require("app/gill/webgl/program/factory");

var _factory2 = _interopRequireDefault(_factory);

var _programRenderingContextMap = require("app/gill/webgl/program-rendering-context-map");

var _programRenderingContextMap2 = _interopRequireDefault(_programRenderingContextMap);

var _renderingContextRepository = require("app/gill/webgl/rendering-context-repository");

var _renderingContextRepository2 = _interopRequireDefault(_renderingContextRepository);

var _factory3 = require("app/gill/webgl/service/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/webgl/shader/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglService = _factory4.default.construct(_bufferRenderingContextMap2.default, _factory2.default, _programRenderingContextMap2.default, _renderingContextRepository2.default, _factory6.default);
exports.default = webglService;