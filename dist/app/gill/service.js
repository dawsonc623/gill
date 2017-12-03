"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _repository = require("app/gill/model/attribute-data/repository");

var _repository2 = _interopRequireDefault(_repository);

var _factory3 = require("app/gill/model/attribute-value-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/model/index-collection/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _modelBufferService = require("app/gill/model-buffer-service");

var _modelBufferService2 = _interopRequireDefault(_modelBufferService);

var _factory7 = require("app/gill/model/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _factory9 = require("app/gill/model/number/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/gill/program/source/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _service = require("app/gill/renderer/service");

var _service2 = _interopRequireDefault(_service);

var _repository3 = require("app/gill/model/texture-data/repository");

var _repository4 = _interopRequireDefault(_repository3);

var _factory13 = require("app/gill/model/uniform-value-map/factory");

var _factory14 = _interopRequireDefault(_factory13);

var _factory15 = require("app/gill/model/vector2/factory");

var _factory16 = _interopRequireDefault(_factory15);

var _factory17 = require("app/gill/model/vector3/factory");

var _factory18 = _interopRequireDefault(_factory17);

var _factory19 = require("app/gill/model/vertex/factory");

var _factory20 = _interopRequireDefault(_factory19);

var _service3 = require("app/gill/webgl/service");

var _service4 = _interopRequireDefault(_service3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillService = _factory2.default.construct(_repository2.default, _factory4.default, _factory6.default, _modelBufferService2.default, _factory8.default, _factory10.default, _factory12.default, _service2.default, _repository4.default, _factory14.default, _factory16.default, _factory18.default, _factory20.default, _service4.default);
exports.default = gillService;