(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/attribute-buffer-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeBufferMapFactory = new _factory2.default();
exports.default = gillAttributeBufferMapFactory;
},{"lib/gill/attribute-buffer-map/factory.class":67}],2:[function(require,module,exports){
"use strict";

var _service = require("app/gill/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.gill = _service2.default;
},{"app/gill/service":53}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/buffer-cache/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/context-models-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/model-buffer-map/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GillBufferCache = _factory2.default.construct(_factory4.default.construct(), _factory6.default);
exports.default = GillBufferCache;
},{"app/gill/buffer-cache/factory":4,"app/gill/context-models-map/factory":8,"app/gill/model-buffer-map/factory":9}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/buffer-cache/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferCacheFactory = new _factory2.default();
exports.default = gillBufferCacheFactory;
},{"lib/gill/buffer-cache/factory.class":69}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/buffer/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferFactory = new _factory2.default();
exports.default = gillBufferFactory;
},{"lib/gill/buffer/factory.class":71}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/buffer/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/attribute-buffer-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _bufferCache = require("app/gill/buffer-cache");

var _bufferCache2 = _interopRequireDefault(_bufferCache);

var _factory5 = require("app/gill/buffer/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferService = _factory2.default.construct(_factory4.default, _bufferCache2.default, _factory6.default);
exports.default = gillBufferService;
},{"app/gill/attribute-buffer-map/factory":1,"app/gill/buffer-cache":3,"app/gill/buffer/factory":5,"app/gill/buffer/service/factory":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/buffer/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferServiceFactory = new _factory2.default();
exports.default = gillBufferServiceFactory;
},{"lib/gill/buffer/service/factory.class":73}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/context-models-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillContextModelsMapFactory = new _factory2.default();
exports.default = gillContextModelsMapFactory;
},{"lib/gill/context-models-map/factory.class":75}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model-buffer-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelBufferMapFactory = new _factory2.default();
exports.default = gillModelBufferMapFactory;
},{"lib/gill/model-buffer-map/factory.class":77}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model-buffer-service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _service = require("app/gill/buffer/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelBufferService = _factory2.default.construct(_service2.default);
exports.default = gillModelBufferService;
},{"app/gill/buffer/service":6,"app/gill/model-buffer-service/factory":11}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model-buffer-service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelBufferServiceFactory = new _factory2.default();
exports.default = gillModelBufferServiceFactory;
},{"lib/gill/model-buffer-service/factory.class":79}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model-texture-repository/factory");

var _factory2 = _interopRequireDefault(_factory);

var _service = require("app/gill/webgl/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modelTextureRepository = _factory2.default.construct(_service2.default);
exports.default = modelTextureRepository;
},{"app/gill/model-texture-repository/factory":13,"app/gill/webgl/service":62}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model-texture-repository/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modelTextureRepositoryFactory = new _factory2.default();
exports.default = modelTextureRepositoryFactory;
},{"lib/gill/model-texture-repository/factory.class":81}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model/attribute-data/cache/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelAttributeDataCache = _factory2.default.construct();
exports.default = gillModelAttributeDataCache;
},{"app/gill/model/attribute-data/cache/factory":15}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/attribute-data/cache/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelAttributeDataCacheFactory = new _factory2.default();
exports.default = gillModelAttributeDataCacheFactory;
},{"lib/gill/model/attribute-data/cache/factory.class":85}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/attribute-data/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelAttributeDataFactory = new _factory2.default();
exports.default = gillModelAttributeDataFactory;
},{"lib/gill/model/attribute-data/factory.class":86}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model/attribute-data/repository/factory");

var _factory2 = _interopRequireDefault(_factory);

var _cache = require("app/gill/model/attribute-data/cache");

var _cache2 = _interopRequireDefault(_cache);

var _factory3 = require("app/gill/model/attribute-data/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelAttributeDataRepository = _factory2.default.construct(_cache2.default, _factory4.default);
exports.default = gillModelAttributeDataRepository;
},{"app/gill/model/attribute-data/cache":14,"app/gill/model/attribute-data/factory":16,"app/gill/model/attribute-data/repository/factory":18}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/attribute-data/repository/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelAttributeDataRepositoryFactory = new _factory2.default();
exports.default = gillModelAttributeDataRepositoryFactory;
},{"lib/gill/model/attribute-data/repository/factory.class":88}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/attribute-value-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeValueMapFactory = new _factory2.default();
exports.default = gillAttributeValueMapFactory;
},{"lib/gill/model/attribute-value-map/factory.class":90}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelFactory = new _factory2.default();
exports.default = gillModelFactory;
},{"lib/gill/model/factory.class":91}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/index-collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillIndexCollectionFactory = new _factory2.default();
exports.default = gillIndexCollectionFactory;
},{"lib/gill/model/index-collection/factory.class":93}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/number/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillNumberFactory = new _factory2.default();
exports.default = gillNumberFactory;
},{"lib/gill/model/number/factory.class":95}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/texture-data/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textureDataFactory = new _factory2.default();
exports.default = textureDataFactory;
},{"lib/gill/model/texture-data/factory.class":97}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model/texture-data/repository/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/model/texture-data/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textureDataRepository = _factory2.default.construct(_factory4.default);
exports.default = textureDataRepository;
},{"app/gill/model/texture-data/factory":23,"app/gill/model/texture-data/repository/factory":25}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/texture-data/repository/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textureDataRepositoryFactory = new _factory2.default();
exports.default = textureDataRepositoryFactory;
},{"lib/gill/model/texture-data/repository/factory.class":99}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/uniform-value-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformValueMapFactory = new _factory2.default();
exports.default = gillUniformValueMapFactory;
},{"lib/gill/model/uniform-value-map/factory.class":101}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vector2/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVector2Factory = new _factory2.default();
exports.default = gillVector2Factory;
},{"lib/gill/model/vector2/factory.class":103}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vector3/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVector3Factory = new _factory2.default();
exports.default = gillVector3Factory;
},{"lib/gill/model/vector3/factory.class":105}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vertex/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVertexFactory = new _factory2.default();
exports.default = gillVertexFactory;
},{"lib/gill/model/vertex/factory.class":107}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program-webgl-adapter/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _service = require("app/gill/webgl/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramWebglServiceAdapter = _factory2.default.construct(_service2.default);
exports.default = gillProgramWebglServiceAdapter;
},{"app/gill/program-webgl-adapter/service/factory":31,"app/gill/webgl/service":62}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program-webgl-adapter/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var programWebglServiceAdapterFactory = new _factory2.default();
exports.default = programWebglServiceAdapterFactory;
},{"lib/gill/program-webgl-adapter/service/factory.class":109}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/attribute/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglAttributeCollectionFactory = new _factory2.default();
exports.default = gillWebglAttributeCollectionFactory;
},{"lib/gill/program/attribute/collection/factory.class":113}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/attribute/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglAttributeFactory = new _factory2.default();
exports.default = gillWebglAttributeFactory;
},{"lib/gill/program/attribute/factory.class":114}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program/cache/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/context-source-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/program/source-program-map/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramCache = _factory2.default.construct(_factory4.default.construct(), _factory6.default);
exports.default = gillProgramCache;
},{"app/gill/program/cache/factory":35,"app/gill/program/context-source-map/factory":36,"app/gill/program/source-program-map/factory":40}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/cache/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramCache = new _factory2.default();
exports.default = gillProgramCache;
},{"lib/gill/program/cache/factory.class":116}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/context-source-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillContextSourceMapFactory = new _factory2.default();
exports.default = gillContextSourceMapFactory;
},{"lib/gill/program/context-source-map/factory.class":118}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramFactory = new _factory2.default();
exports.default = gillProgramFactory;
},{"lib/gill/program/factory.class":119}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program/attribute/collection/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/attribute/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _cache = require("app/gill/program/cache");

var _cache2 = _interopRequireDefault(_cache);

var _factory5 = require("app/gill/program/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/program/service/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _service = require("app/gill/program/webgl/service");

var _service2 = _interopRequireDefault(_service);

var _factory9 = require("app/gill/program/texture/collection/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/gill/program/texture/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _factory13 = require("app/gill/program/uniform/collection/factory");

var _factory14 = _interopRequireDefault(_factory13);

var _factory15 = require("app/gill/program/uniform/factory");

var _factory16 = _interopRequireDefault(_factory15);

var _typeMap = require("app/gill/program/variable/type-map");

var _typeMap2 = _interopRequireDefault(_typeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramService = _factory8.default.construct(_factory2.default, _factory4.default, _cache2.default, _factory6.default, _service2.default, _factory10.default, _factory12.default, _factory14.default, _factory16.default, _typeMap2.default);
exports.default = gillProgramService;
},{"app/gill/program/attribute/collection/factory":32,"app/gill/program/attribute/factory":33,"app/gill/program/cache":34,"app/gill/program/factory":37,"app/gill/program/service/factory":39,"app/gill/program/texture/collection/factory":42,"app/gill/program/texture/factory":43,"app/gill/program/uniform/collection/factory":44,"app/gill/program/uniform/factory":45,"app/gill/program/variable/type-map":46,"app/gill/program/webgl/service":49}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramServiceFactory = new _factory2.default();
exports.default = gillProgramServiceFactory;
},{"lib/gill/program/service/factory.class":121}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/source-program-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillSourceProgramMapFactory = new _factory2.default();
exports.default = gillSourceProgramMapFactory;
},{"lib/gill/program/source-program-map/factory.class":123}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/source/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var standardGillProgramSourceFactory = new _factory2.default();
exports.default = standardGillProgramSourceFactory;
},{"lib/gill/program/source/factory.class":125}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/texture/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textureCollectionFactory = new _factory2.default();
exports.default = textureCollectionFactory;
},{"lib/gill/program/texture/collection/factory.class":128}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/texture/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textureFactory = new _factory2.default();
exports.default = textureFactory;
},{"lib/gill/program/texture/factory.class":129}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/uniform/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglUniformCollectionFactory = new _factory2.default();
exports.default = gillWebglUniformCollectionFactory;
},{"lib/gill/program/uniform/collection/factory.class":132}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/uniform/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglUniformFactory = new _factory2.default();
exports.default = gillWebglUniformFactory;
},{"lib/gill/program/uniform/factory.class":133}],46:[function(require,module,exports){
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
gillWebglVariableTypeMap.setWebglVariableType(35678, // gl.SAMPLER_2D
_factory4.default.construct(5121, // gl.UNSIGNED_SHORT
Int8Array, // Data will be an array of INT8s (based on "gl.UNSIGNED_SHORT")
1 // Each element will be 1 index based on "gl.UNSIGNED_SHORT"
));
gillWebglVariableTypeMap.setWebglVariableType(5126, // gl.FLOAT
_factory4.default.construct(5126, // gl.FLOAT
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
1 // Each element will be 1 index based on "gl.FLOAT"
));
exports.default = gillWebglVariableTypeMap;
},{"app/gill/program/variable/type-map/factory":47,"app/gill/program/variable/type/factory":48}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/variable/type-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglVariableTypeMapFactory = new _factory2.default();
exports.default = gillWebglVariableTypeMapFactory;
},{"lib/gill/program/variable/type-map/factory.class":135}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/variable/type/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglVariableTypeFactory = new _factory2.default();
exports.default = gillWebglVariableTypeFactory;
},{"lib/gill/program/variable/type/factory.class":137}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _service = require("app/gill/program-webgl-adapter/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _service2.default;
},{"app/gill/program-webgl-adapter/service":30}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/renderer/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillRendererFactory = new _factory2.default();
exports.default = gillRendererFactory;
},{"lib/gill/renderer/factory.class":139}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/renderer/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _modelTextureRepository = require("app/gill/model-texture-repository");

var _modelTextureRepository2 = _interopRequireDefault(_modelTextureRepository);

var _service = require("app/gill/program/service");

var _service2 = _interopRequireDefault(_service);

var _factory3 = require("app/gill/renderer/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillRendererService = _factory2.default.construct(_modelTextureRepository2.default, _service2.default, _factory4.default);
exports.default = gillRendererService;
},{"app/gill/model-texture-repository":12,"app/gill/program/service":38,"app/gill/renderer/factory":50,"app/gill/renderer/service/factory":52}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/renderer/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillRendererServiceFactory = new _factory2.default();
exports.default = gillRendererServiceFactory;
},{"lib/gill/renderer/service/factory.class":141}],53:[function(require,module,exports){
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
},{"app/gill/model-buffer-service":10,"app/gill/model/attribute-data/repository":17,"app/gill/model/attribute-value-map/factory":19,"app/gill/model/factory":20,"app/gill/model/index-collection/factory":21,"app/gill/model/number/factory":22,"app/gill/model/texture-data/repository":24,"app/gill/model/uniform-value-map/factory":26,"app/gill/model/vector2/factory":27,"app/gill/model/vector3/factory":28,"app/gill/model/vertex/factory":29,"app/gill/program/source/factory":41,"app/gill/renderer/service":51,"app/gill/service/factory":54,"app/gill/webgl/service":62}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillServiceFactory = new _factory2.default();
exports.default = gillServiceFactory;
},{"lib/gill/service/factory.class":143}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/buffer-rendering-context-map/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglBufferRenderingContextMap = _factory2.default.construct();
exports.default = webglBufferRenderingContextMap;
},{"app/gill/webgl/buffer-rendering-context-map/factory":56}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/buffer-rendering-context-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglBufferRenderingContextMapFactory = new _factory2.default();
exports.default = webglBufferRenderingContextMapFactory;
},{"lib/gill/webgl/buffer-rendering-context-map/factory.class":145}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/program-rendering-context-map/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglProgramRenderingContextMap = _factory2.default.construct();
exports.default = webglProgramRenderingContextMap;
},{"app/gill/webgl/program-rendering-context-map/factory":58}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/program-rendering-context-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglProgramRenderingContextMapFactory = new _factory2.default();
exports.default = webglProgramRenderingContextMapFactory;
},{"lib/gill/webgl/program-rendering-context-map/factory.class":147}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/program/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglProgramFactory = new _factory2.default();
exports.default = webglProgramFactory;
},{"lib/gill/webgl/program/factory.class":148}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/rendering-context-repository/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglRenderingContextRepository = _factory2.default.construct();
exports.default = webglRenderingContextRepository;
},{"app/gill/webgl/rendering-context-repository/factory":61}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/rendering-context-repository/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglRenderingContextRepositoryFactory = new _factory2.default();
exports.default = webglRenderingContextRepositoryFactory;
},{"lib/gill/webgl/rendering-context-repository/factory.class":150}],62:[function(require,module,exports){
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

var _textureRenderingContextMap = require("app/gill/webgl/texture-rendering-context-map");

var _textureRenderingContextMap2 = _interopRequireDefault(_textureRenderingContextMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglService = _factory4.default.construct(_bufferRenderingContextMap2.default, _factory2.default, _programRenderingContextMap2.default, _renderingContextRepository2.default, _factory6.default, _textureRenderingContextMap2.default);
exports.default = webglService;
},{"app/gill/webgl/buffer-rendering-context-map":55,"app/gill/webgl/program-rendering-context-map":57,"app/gill/webgl/program/factory":59,"app/gill/webgl/rendering-context-repository":60,"app/gill/webgl/service/factory":63,"app/gill/webgl/shader/factory":64,"app/gill/webgl/texture-rendering-context-map":65}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglServiceFactory = new _factory2.default();
exports.default = webglServiceFactory;
},{"lib/gill/webgl/service/factory.class":152}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/shader/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglShaderFactory = new _factory2.default();
exports.default = webglShaderFactory;
},{"lib/gill/webgl/shader/factory.class":153}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/buffer-rendering-context-map/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglTextureRenderingContextMap = _factory2.default.construct();
exports.default = webglTextureRenderingContextMap;
},{"app/gill/webgl/buffer-rendering-context-map/factory":56}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttribufeBufferMap = function () {
    function StandardGillAttribufeBufferMap() {
        _classCallCheck(this, StandardGillAttribufeBufferMap);

        this.buffers = new Map();
    }

    _createClass(StandardGillAttribufeBufferMap, [{
        key: "eachAttributeBuffer",
        value: function eachAttributeBuffer(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.buffers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        attributeName = _step$value[0],
                        webglBuffer = _step$value[1];

                    action(attributeName, webglBuffer);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasAttributeBuffer",
        value: function hasAttributeBuffer(attributeName) {
            return this.buffers.has(attributeName);
        }
    }, {
        key: "getAttributeBuffer",
        value: function getAttributeBuffer(attributeName) {
            return this.buffers.get(attributeName);
        }
    }, {
        key: "setAttributeBuffer",
        value: function setAttributeBuffer(attributeName, webglBuffer) {
            this.buffers.set(attributeName, webglBuffer);
        }
    }]);

    return StandardGillAttribufeBufferMap;
}();

exports.default = StandardGillAttribufeBufferMap;
},{}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attributeBufferMap = require("lib/gill/attribute-buffer-map.class");

var _attributeBufferMap2 = _interopRequireDefault(_attributeBufferMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeBufferMapFactory = function () {
    function StandardGillAttributeBufferMapFactory() {
        _classCallCheck(this, StandardGillAttributeBufferMapFactory);
    }

    _createClass(StandardGillAttributeBufferMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _attributeBufferMap2.default();
        }
    }]);

    return StandardGillAttributeBufferMapFactory;
}();

exports.default = StandardGillAttributeBufferMapFactory;
},{"lib/gill/attribute-buffer-map.class":66}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillBufferCache = function () {
    function StandardGillBufferCache(gillContextModels, gillModelBufferMapFactory) {
        _classCallCheck(this, StandardGillBufferCache);

        this.gillContextModels = gillContextModels;
        this.gillModelBufferMapFactory = gillModelBufferMapFactory;
    }

    _createClass(StandardGillBufferCache, [{
        key: "cacheBuffer",
        value: function cacheBuffer(gillModel, gillBuffer, webglRenderingContext) {
            var gillModelBuffers = this.gillContextModels.getModelBuffers(webglRenderingContext);
            if (gillModelBuffers === undefined) {
                gillModelBuffers = this.gillModelBufferMapFactory.construct();
                this.gillContextModels.setModelBuffers(webglRenderingContext, gillModelBuffers);
            }
            gillModelBuffers.setBuffer(gillModel, gillBuffer);
        }
    }, {
        key: "getBuffer",
        value: function getBuffer(gillModel, webglRenderingContext) {
            var gillModelBuffers = this.gillContextModels.getModelBuffers(webglRenderingContext);
            var buffer = void 0;
            if (gillModelBuffers !== undefined) {
                buffer = gillModelBuffers.getBuffer(gillModel);
            }
            if (buffer === undefined) {
                throw new Error("No such cached buffer");
            }
            return buffer;
        }
    }, {
        key: "hasBuffer",
        value: function hasBuffer(gillModel, webglRenderingContext) {
            var hasGillModelBuffers = this.gillContextModels.getModelBuffers(webglRenderingContext);
            var gillModelBuffers = undefined,
                hasBuffer = false;
            if (hasGillModelBuffers) {
                gillModelBuffers = this.gillContextModels.getModelBuffers(webglRenderingContext);
                hasBuffer = gillModelBuffers.hasBuffer(gillModel);
            }
            return hasBuffer;
        }
    }]);

    return StandardGillBufferCache;
}();

exports.default = StandardGillBufferCache;
},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bufferCache = require("lib/gill/buffer-cache.class");

var _bufferCache2 = _interopRequireDefault(_bufferCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillBufferCacheFactory = function () {
    function StandardGillBufferCacheFactory() {
        _classCallCheck(this, StandardGillBufferCacheFactory);
    }

    _createClass(StandardGillBufferCacheFactory, [{
        key: "construct",
        value: function construct(gillContextModels, gillModelBufferMapFactory) {
            return new _bufferCache2.default(gillContextModels, gillModelBufferMapFactory);
        }
    }]);

    return StandardGillBufferCacheFactory;
}();

exports.default = StandardGillBufferCacheFactory;
},{"lib/gill/buffer-cache.class":68}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillBuffer = function () {
    function StandardGillBuffer(gillAttributeBuffers, webglIndexBuffer) {
        _classCallCheck(this, StandardGillBuffer);

        this.gillAttributeBuffers = gillAttributeBuffers;
        this.webglIndexBuffer = webglIndexBuffer;
    }

    _createClass(StandardGillBuffer, [{
        key: "hasAttributeBuffer",
        value: function hasAttributeBuffer(attributeName) {
            return this.gillAttributeBuffers.hasAttributeBuffer(attributeName);
        }
    }, {
        key: "getAttributeBuffer",
        value: function getAttributeBuffer(attributeName) {
            return this.gillAttributeBuffers.getAttributeBuffer(attributeName);
        }
    }, {
        key: "getIndexBuffer",
        value: function getIndexBuffer() {
            return this.webglIndexBuffer;
        }
    }, {
        key: "setAttributeBuffer",
        value: function setAttributeBuffer(attributeName, webglBuffer) {
            this.gillAttributeBuffers.setAttributeBuffer(attributeName, webglBuffer);
        }
    }]);

    return StandardGillBuffer;
}();

exports.default = StandardGillBuffer;
},{}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buffer = require("lib/gill/buffer.class");

var _buffer2 = _interopRequireDefault(_buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillBufferFactory = function () {
    function StandardGillBufferFactory() {
        _classCallCheck(this, StandardGillBufferFactory);
    }

    _createClass(StandardGillBufferFactory, [{
        key: "construct",
        value: function construct(gillAttributeBuffers, webglIndexBuffer) {
            return new _buffer2.default(gillAttributeBuffers, webglIndexBuffer);
        }
    }]);

    return StandardGillBufferFactory;
}();

exports.default = StandardGillBufferFactory;
},{"lib/gill/buffer.class":70}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillBufferService = function () {
    function StandardGillBufferService(gillAttributeBufferMapFactory, gillBufferCache, gillBufferFactory) {
        _classCallCheck(this, StandardGillBufferService);

        this.gillAttributeBufferMapFactory = gillAttributeBufferMapFactory;
        this.gillBufferCache = gillBufferCache;
        this.gillBufferFactory = gillBufferFactory;
    }

    _createClass(StandardGillBufferService, [{
        key: "getModelBuffer",
        value: function getModelBuffer(gillModel, webglRenderingContext) {
            var gillBufferExists = this.gillBufferCache.hasBuffer(gillModel, webglRenderingContext);
            var gillBuffer = void 0;
            if (gillBufferExists) {
                gillBuffer = this.gillBufferCache.getBuffer(gillModel, webglRenderingContext);
            } else {
                gillBuffer = this.gillBufferFactory.construct(this.gillAttributeBufferMapFactory.construct(), webglRenderingContext.createBuffer());
                this.gillBufferCache.cacheBuffer(gillModel, gillBuffer, webglRenderingContext);
            }
            return gillBuffer;
        }
    }]);

    return StandardGillBufferService;
}();

exports.default = StandardGillBufferService;
},{}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/buffer/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillBufferServiceFactory = function () {
    function StandardGillBufferServiceFactory() {
        _classCallCheck(this, StandardGillBufferServiceFactory);
    }

    _createClass(StandardGillBufferServiceFactory, [{
        key: "construct",
        value: function construct(gillAttributeBufferMapFactory, gillBufferCache, gillBufferFactory) {
            return new _service2.default(gillAttributeBufferMapFactory, gillBufferCache, gillBufferFactory);
        }
    }]);

    return StandardGillBufferServiceFactory;
}();

exports.default = StandardGillBufferServiceFactory;
},{"lib/gill/buffer/service.class":72}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillContextModelsMap = function () {
    function StandardGillContextModelsMap() {
        _classCallCheck(this, StandardGillContextModelsMap);

        this.gillModelBuffers = new Map();
    }

    _createClass(StandardGillContextModelsMap, [{
        key: "eachModelBuffers",
        value: function eachModelBuffers(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.gillModelBuffers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        webglRenderingContext = _step$value[0],
                        gillModelBuffers = _step$value[1];

                    action(webglRenderingContext, gillModelBuffers);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasModelBuffers",
        value: function hasModelBuffers(webglRenderingContext) {
            return this.gillModelBuffers.has(webglRenderingContext);
        }
    }, {
        key: "getModelBuffers",
        value: function getModelBuffers(webglRenderingContext) {
            return this.gillModelBuffers.get(webglRenderingContext);
        }
    }, {
        key: "setModelBuffers",
        value: function setModelBuffers(webglRenderingContext, gillModelBuffers) {
            this.gillModelBuffers.set(webglRenderingContext, gillModelBuffers);
        }
    }]);

    return StandardGillContextModelsMap;
}();

exports.default = StandardGillContextModelsMap;
},{}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contextModelsMap = require("lib/gill/context-models-map.class");

var _contextModelsMap2 = _interopRequireDefault(_contextModelsMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillContextModelsMapFactory = function () {
    function StandardGillContextModelsMapFactory() {
        _classCallCheck(this, StandardGillContextModelsMapFactory);
    }

    _createClass(StandardGillContextModelsMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _contextModelsMap2.default();
        }
    }]);

    return StandardGillContextModelsMapFactory;
}();

exports.default = StandardGillContextModelsMapFactory;
},{"lib/gill/context-models-map.class":74}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelBufferMap = function () {
    function StandardGillModelBufferMap() {
        _classCallCheck(this, StandardGillModelBufferMap);

        this.gillModelBuffers = new Map();
    }

    _createClass(StandardGillModelBufferMap, [{
        key: "eachBuffer",
        value: function eachBuffer(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.gillModelBuffers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        gillModel = _step$value[0],
                        gillBuffer = _step$value[1];

                    action(gillModel, gillBuffer);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasBuffer",
        value: function hasBuffer(gillModel) {
            return this.gillModelBuffers.has(gillModel);
        }
    }, {
        key: "getBuffer",
        value: function getBuffer(gillModel) {
            return this.gillModelBuffers.get(gillModel);
        }
    }, {
        key: "setBuffer",
        value: function setBuffer(gillModel, gillBuffer) {
            this.gillModelBuffers.set(gillModel, gillBuffer);
        }
    }]);

    return StandardGillModelBufferMap;
}();

exports.default = StandardGillModelBufferMap;
},{}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelBufferMap = require("lib/gill/model-buffer-map.class");

var _modelBufferMap2 = _interopRequireDefault(_modelBufferMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelBufferMapFactory = function () {
    function StandardGillModelBufferMapFactory() {
        _classCallCheck(this, StandardGillModelBufferMapFactory);
    }

    _createClass(StandardGillModelBufferMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _modelBufferMap2.default();
        }
    }]);

    return StandardGillModelBufferMapFactory;
}();

exports.default = StandardGillModelBufferMapFactory;
},{"lib/gill/model-buffer-map.class":76}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelBufferService = function () {
    function StandardGillModelBufferService(gillBufferService) {
        _classCallCheck(this, StandardGillModelBufferService);

        this.gillBufferService = gillBufferService;
    }

    _createClass(StandardGillModelBufferService, [{
        key: "getModelAttributeBuffer",
        value: function getModelAttributeBuffer(gillModel, attributeName, webglRenderingContext) {
            var gillBuffer = this.gillBufferService.getModelBuffer(gillModel, webglRenderingContext);
            var hasAttributeBuffer = gillBuffer.hasAttributeBuffer(attributeName);
            var attributeBuffer = void 0;
            if (hasAttributeBuffer) {
                attributeBuffer = gillBuffer.getAttributeBuffer(attributeName);
            } else {
                attributeBuffer = webglRenderingContext.createBuffer();
                gillBuffer.setAttributeBuffer(attributeName, attributeBuffer);
            }
            return attributeBuffer;
        }
    }, {
        key: "getModelIndexBuffer",
        value: function getModelIndexBuffer(gillModel, webglRenderingContext) {
            var gillBuffer = this.gillBufferService.getModelBuffer(gillModel, webglRenderingContext);
            return gillBuffer.getIndexBuffer();
        }
    }]);

    return StandardGillModelBufferService;
}();

exports.default = StandardGillModelBufferService;
},{}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelBufferService = require("lib/gill/model-buffer-service.class");

var _modelBufferService2 = _interopRequireDefault(_modelBufferService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelBufferServiceFactory = function () {
    function StandardGillModelBufferServiceFactory() {
        _classCallCheck(this, StandardGillModelBufferServiceFactory);
    }

    _createClass(StandardGillModelBufferServiceFactory, [{
        key: "construct",
        value: function construct(gillBufferService) {
            return new _modelBufferService2.default(gillBufferService);
        }
    }]);

    return StandardGillModelBufferServiceFactory;
}();

exports.default = StandardGillModelBufferServiceFactory;
},{"lib/gill/model-buffer-service.class":78}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardModelTextureRepository = function () {
    function StandardModelTextureRepository(webglService) {
        _classCallCheck(this, StandardModelTextureRepository);

        this.webglService = webglService;
        this.modelTextures = new Map();
    }

    _createClass(StandardModelTextureRepository, [{
        key: "getTexture",
        value: function getTexture(model, name, webglRenderingContext) {
            var hasTextures = this.modelTextures.has(model);
            var textures = void 0,
                hasTexture = false;
            if (hasTextures) {
                textures = this.modelTextures.get(model);
                hasTexture = textures.has(name);
            } else {
                textures = new Map();
                this.modelTextures.set(model, textures);
            }
            var texture = void 0;
            if (hasTexture) {
                texture = textures.get(name);
            } else {
                texture = this.webglService.createWebglTexture(webglRenderingContext);
                textures.set(name, texture);
            }
            return texture;
        }
    }]);

    return StandardModelTextureRepository;
}();

exports.default = StandardModelTextureRepository;
},{}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelTextureRepository = require("lib/gill/model-texture-repository.class");

var _modelTextureRepository2 = _interopRequireDefault(_modelTextureRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardModelTextureRepositoryFactory = function () {
    function StandardModelTextureRepositoryFactory() {
        _classCallCheck(this, StandardModelTextureRepositoryFactory);
    }

    _createClass(StandardModelTextureRepositoryFactory, [{
        key: "construct",
        value: function construct(webglService) {
            return new _modelTextureRepository2.default(webglService);
        }
    }]);

    return StandardModelTextureRepositoryFactory;
}();

exports.default = StandardModelTextureRepositoryFactory;
},{"lib/gill/model-texture-repository.class":80}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModel = function () {
    function StandardGillModel(attributeDataRepository, indices, textureDataRepository, uniformValues) {
        _classCallCheck(this, StandardGillModel);

        this.attributeDataRepository = attributeDataRepository;
        this.indices = indices;
        this.textureDataRepository = textureDataRepository;
        this.uniformValues = uniformValues;
        this.indicesChanged = false;
    }

    _createClass(StandardGillModel, [{
        key: "addVertex",
        value: function addVertex(vertex) {
            var _this = this;

            this.indices.addIndex(this.indices.indexCount());
            this.indicesChanged = true;
            vertex.eachAttribute(function (attributeName, attributeValue) {
                //TODO Change this to follow the pattern used by the texture repository
                var attributeData = _this.attributeDataRepository.getAttributeData(_this, attributeName);
                attributeData.addAttributeValue(attributeValue);
            });
            return this;
        }
    }, {
        key: "getAttributeData",
        value: function getAttributeData(attributeName) {
            return this.attributeDataRepository.getAttributeData(this, attributeName);
        }
    }, {
        key: "getBufferIndices",
        value: function getBufferIndices() {
            return this.indicesChanged;
        }
    }, {
        key: "getIndexData",
        value: function getIndexData() {
            return this.indices.toArray();
        }
    }, {
        key: "getTextureData",
        value: function getTextureData(name) {
            return this.textureDataRepository.getData(this, name);
        }
    }, {
        key: "getUniformData",
        value: function getUniformData(uniformName) {
            return this.uniformValues.getValue(uniformName).toUniformData();
        }
    }, {
        key: "setBufferIndices",
        value: function setBufferIndices(indicesChanged) {
            this.indicesChanged = indicesChanged;
        }
    }, {
        key: "setTexture",
        value: function setTexture(name, value) {
            this.textureDataRepository.setValue(this, name, value);
            return this;
        }
    }, {
        key: "setUniform",
        value: function setUniform(uniformName, uniformValue) {
            this.uniformValues.setValue(uniformName, uniformValue);
            return this;
        }
    }]);

    return StandardGillModel;
}();

exports.default = StandardGillModel;
},{}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeData = function () {
    function StandardGillModelAttributeData(data, hasChanged, normalized, offset, stride) {
        _classCallCheck(this, StandardGillModelAttributeData);

        this.data = data;
        this.hasChanged = hasChanged;
        this.normalized = normalized;
        this.offset = offset;
        this.stride = stride;
    }

    _createClass(StandardGillModelAttributeData, [{
        key: "addAttributeValue",
        value: function addAttributeValue(attributeValue) {
            attributeValue.addToAttributeData(this.data);
            this.hasChanged = true;
        }
    }, {
        key: "getData",
        value: function getData() {
            return this.data;
        }
    }, {
        key: "getOffset",
        value: function getOffset() {
            return this.offset;
        }
    }, {
        key: "getStride",
        value: function getStride() {
            return this.stride;
        }
    }, {
        key: "normalize",
        value: function normalize() {
            return this.normalized;
        }
    }, {
        key: "needsBuffered",
        value: function needsBuffered() {
            return this.hasChanged;
        }
    }, {
        key: "setNeedsBuffered",
        value: function setNeedsBuffered(needsBuffered) {
            this.hasChanged = needsBuffered;
        }
    }]);

    return StandardGillModelAttributeData;
}();

exports.default = StandardGillModelAttributeData;
},{}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataCache = function () {
    function StandardGillModelAttributeDataCache() {
        _classCallCheck(this, StandardGillModelAttributeDataCache);

        this.attributeData = new Map();
    }

    _createClass(StandardGillModelAttributeDataCache, [{
        key: "getAttributeData",
        value: function getAttributeData(model, name) {
            var hasAttributes = this.attributeData.has(model);
            var attributes = void 0,
                hasAttributeData = false;
            if (hasAttributes) {
                attributes = this.attributeData.get(model);
                hasAttributeData = attributes.has(name);
            }
            if (!hasAttributeData) {
                throw new Error("Attribute '" + name + "' not found in cache");
            }
            return attributes.get(name);
        }
    }, {
        key: "hasAttributeData",
        value: function hasAttributeData(model, name) {
            var hasAttributes = this.attributeData.has(model);
            var hasAttributeData = false;
            if (hasAttributes) {
                var attributes = this.attributeData.get(model);
                hasAttributeData = attributes.has(name);
            }
            return hasAttributeData;
        }
    }, {
        key: "setAttributeData",
        value: function setAttributeData(model, name, data) {
            var hasAttributes = this.attributeData.has(model);
            var attributes = void 0;
            if (hasAttributes) {
                attributes = this.attributeData.get(model);
            } else {
                attributes = new Map();
                this.attributeData.set(model, attributes);
            }
            attributes.set(name, data);
        }
    }]);

    return StandardGillModelAttributeDataCache;
}();

exports.default = StandardGillModelAttributeDataCache;
},{}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cache = require("lib/gill/model/attribute-data/cache.class");

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataCacheFactory = function () {
    function StandardGillModelAttributeDataCacheFactory() {
        _classCallCheck(this, StandardGillModelAttributeDataCacheFactory);
    }

    _createClass(StandardGillModelAttributeDataCacheFactory, [{
        key: "construct",
        value: function construct() {
            return new _cache2.default();
        }
    }]);

    return StandardGillModelAttributeDataCacheFactory;
}();

exports.default = StandardGillModelAttributeDataCacheFactory;
},{"lib/gill/model/attribute-data/cache.class":84}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attributeData = require("lib/gill/model/attribute-data.class");

var _attributeData2 = _interopRequireDefault(_attributeData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataFactory = function () {
    function StandardGillModelAttributeDataFactory() {
        _classCallCheck(this, StandardGillModelAttributeDataFactory);
    }

    _createClass(StandardGillModelAttributeDataFactory, [{
        key: "construct",
        value: function construct(data, hasChanged, normalized, offset, stride) {
            return new _attributeData2.default(data, hasChanged, normalized, offset, stride);
        }
    }]);

    return StandardGillModelAttributeDataFactory;
}();

exports.default = StandardGillModelAttributeDataFactory;
},{"lib/gill/model/attribute-data.class":83}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataRepository = function () {
    function StandardGillModelAttributeDataRepository(gillModelAttributeDataCache, gillModelAttributeDataFactory) {
        _classCallCheck(this, StandardGillModelAttributeDataRepository);

        this.gillModelAttributeDataCache = gillModelAttributeDataCache;
        this.gillModelAttributeDataFactory = gillModelAttributeDataFactory;
    }

    _createClass(StandardGillModelAttributeDataRepository, [{
        key: "getAttributeData",
        value: function getAttributeData(model, attributeName) {
            var hasAttributeData = this.gillModelAttributeDataCache.hasAttributeData(model, attributeName);
            var attributeData = void 0;
            if (hasAttributeData) {
                attributeData = this.gillModelAttributeDataCache.getAttributeData(model, attributeName);
            } else {
                attributeData = this.gillModelAttributeDataFactory.construct(
                //TODO Do not hardcode?
                [], //TODO Should there be a collection here? The starting data
                false, // Whether or not the data has changed since last buffer
                true, // Whether or not the data is normalized
                0, // The span between the start of each attribute value
                0 // The starting index for the first attribute value
                );
                this.gillModelAttributeDataCache.setAttributeData(model, attributeName, attributeData);
            }
            return attributeData;
        }
    }]);

    return StandardGillModelAttributeDataRepository;
}();

exports.default = StandardGillModelAttributeDataRepository;
},{}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _repository = require("lib/gill/model/attribute-data/repository.class");

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataRepositoryFactory = function () {
    function StandardGillModelAttributeDataRepositoryFactory() {
        _classCallCheck(this, StandardGillModelAttributeDataRepositoryFactory);
    }

    _createClass(StandardGillModelAttributeDataRepositoryFactory, [{
        key: "construct",
        value: function construct(gillModelAttributeDataCache, gillModelAttributeDataFactory) {
            return new _repository2.default(gillModelAttributeDataCache, gillModelAttributeDataFactory);
        }
    }]);

    return StandardGillModelAttributeDataRepositoryFactory;
}();

exports.default = StandardGillModelAttributeDataRepositoryFactory;
},{"lib/gill/model/attribute-data/repository.class":87}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeValueMap = function () {
    function StandardGillAttributeValueMap() {
        _classCallCheck(this, StandardGillAttributeValueMap);

        this.attributeValues = new Map();
    }

    _createClass(StandardGillAttributeValueMap, [{
        key: "eachValue",
        value: function eachValue(action) {
            this.attributeValues.forEach(function (attributeValue, attributeName) {
                action(attributeName, attributeValue);
            });
        }
    }, {
        key: "hasValue",
        value: function hasValue(attributeName) {
            return this.attributeValues.has(attributeName);
        }
    }, {
        key: "getValue",
        value: function getValue(attributeName) {
            return this.attributeValues.get(attributeName);
        }
    }, {
        key: "setValue",
        value: function setValue(attributeName, attributeValue) {
            this.attributeValues.set(attributeName, attributeValue);
        }
    }]);

    return StandardGillAttributeValueMap;
}();

exports.default = StandardGillAttributeValueMap;
},{}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attributeValueMap = require("lib/gill/model/attribute-value-map.class");

var _attributeValueMap2 = _interopRequireDefault(_attributeValueMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeValueMapFactory = function () {
    function StandardGillAttributeValueMapFactory() {
        _classCallCheck(this, StandardGillAttributeValueMapFactory);
    }

    _createClass(StandardGillAttributeValueMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _attributeValueMap2.default();
        }
    }]);

    return StandardGillAttributeValueMapFactory;
}();

exports.default = StandardGillAttributeValueMapFactory;
},{"lib/gill/model/attribute-value-map.class":89}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require("lib/gill/model.class");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelFactory = function () {
    function StandardGillModelFactory() {
        _classCallCheck(this, StandardGillModelFactory);
    }

    _createClass(StandardGillModelFactory, [{
        key: "construct",
        value: function construct(gillModelAttributeDataRepository, indices, textureDataRepository, uniformValues) {
            return new _model2.default(gillModelAttributeDataRepository, indices, textureDataRepository, uniformValues);
        }
    }]);

    return StandardGillModelFactory;
}();

exports.default = StandardGillModelFactory;
},{"lib/gill/model.class":82}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillIndexCollection = function () {
    function StandardGillIndexCollection() {
        _classCallCheck(this, StandardGillIndexCollection);

        this.indices = new Array();
    }

    _createClass(StandardGillIndexCollection, [{
        key: "addIndex",
        value: function addIndex(index) {
            this.indices.push(index);
        }
    }, {
        key: "eachIndex",
        value: function eachIndex(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.indices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var index = _step.value;

                    action(index);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "indexCount",
        value: function indexCount() {
            return this.indices.length;
        }
    }, {
        key: "toArray",
        value: function toArray() {
            return this.indices;
        }
    }]);

    return StandardGillIndexCollection;
}();

exports.default = StandardGillIndexCollection;
},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _indexCollection = require("lib/gill/model/index-collection.class");

var _indexCollection2 = _interopRequireDefault(_indexCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillIndexCollectionFactory = function () {
    function StandardGillIndexCollectionFactory() {
        _classCallCheck(this, StandardGillIndexCollectionFactory);
    }

    _createClass(StandardGillIndexCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _indexCollection2.default();
        }
    }]);

    return StandardGillIndexCollectionFactory;
}();

exports.default = StandardGillIndexCollectionFactory;
},{"lib/gill/model/index-collection.class":92}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillNumber = function () {
    function StandardGillNumber(value) {
        _classCallCheck(this, StandardGillNumber);

        this.value = value;
    }

    _createClass(StandardGillNumber, [{
        key: "addToAttributeData",
        value: function addToAttributeData(attributeData) {
            attributeData.push(this.value);
        }
    }, {
        key: "toUniformData",
        value: function toUniformData() {
            return [this.value];
        }
    }]);

    return StandardGillNumber;
}();

exports.default = StandardGillNumber;
},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _number = require("lib/gill/model/number.class");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillNumberFactory = function () {
    function StandardGillNumberFactory() {
        _classCallCheck(this, StandardGillNumberFactory);
    }

    _createClass(StandardGillNumberFactory, [{
        key: "construct",
        value: function construct(value) {
            return new _number2.default(value);
        }
    }]);

    return StandardGillNumberFactory;
}();

exports.default = StandardGillNumberFactory;
},{"lib/gill/model/number.class":94}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureData = function () {
    function StandardTextureData(format, pixels) {
        _classCallCheck(this, StandardTextureData);

        this.format = format;
        this.pixels = pixels;
        this.hasChanged = true;
    }

    _createClass(StandardTextureData, [{
        key: "getFormat",
        value: function getFormat() {
            return this.format;
        }
    }, {
        key: "getPixels",
        value: function getPixels() {
            return this.pixels;
        }
    }, {
        key: "needsBuffered",
        value: function needsBuffered() {
            return this.hasChanged;
        }
    }, {
        key: "setNeedsBuffered",
        value: function setNeedsBuffered(needsBuffered) {
            this.hasChanged = needsBuffered;
        }
    }]);

    return StandardTextureData;
}();

exports.default = StandardTextureData;
},{}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textureData = require("lib/gill/model/texture-data.class");

var _textureData2 = _interopRequireDefault(_textureData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureDataFactory = function () {
    function StandardTextureDataFactory() {
        _classCallCheck(this, StandardTextureDataFactory);
    }

    _createClass(StandardTextureDataFactory, [{
        key: "construct",
        value: function construct(format, pixels) {
            return new _textureData2.default(format, pixels);
        }
    }]);

    return StandardTextureDataFactory;
}();

exports.default = StandardTextureDataFactory;
},{"lib/gill/model/texture-data.class":96}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureDataRepository = function () {
    function StandardTextureDataRepository(textureDataFactory) {
        _classCallCheck(this, StandardTextureDataRepository);

        this.textureDataFactory = textureDataFactory;
        this.textureData = new Map();
    }

    _createClass(StandardTextureDataRepository, [{
        key: "getData",
        value: function getData(model, name) {
            var hasTextures = this.textureData.has(model);
            var textureData = void 0,
                hasTextureData = false;
            if (hasTextures) {
                textureData = this.textureData.get(model);
                hasTextureData = textureData.has(name);
            }
            if (!hasTextureData) {
                throw new Error("Texture " + name + " not found for model");
            }
            return textureData.get(name);
        }
    }, {
        key: "setValue",
        value: function setValue(model, name, value) {
            var hasTextures = this.textureData.has(model);
            var textureData = void 0,
                hasTextureData = false;
            if (hasTextures) {
                textureData = this.textureData.get(model);
            } else {
                textureData = new Map();
                this.textureData.set(model, textureData);
            }
            textureData.set(name, this.textureDataFactory.construct(6408, //TODO Hard-coded RGBA - not sure how to get WebGL values in here, since WebGL does not come in at this point. May need to be a part of TextureValue, since it knows what the format of its data should be, presumably
            value));
        }
    }]);

    return StandardTextureDataRepository;
}();

exports.default = StandardTextureDataRepository;
},{}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _repository = require("lib/gill/model/texture-data/repository.class");

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureDataRepositoryFactory = function () {
    function StandardTextureDataRepositoryFactory() {
        _classCallCheck(this, StandardTextureDataRepositoryFactory);
    }

    _createClass(StandardTextureDataRepositoryFactory, [{
        key: "construct",
        value: function construct(textureDataFactory) {
            return new _repository2.default(textureDataFactory);
        }
    }]);

    return StandardTextureDataRepositoryFactory;
}();

exports.default = StandardTextureDataRepositoryFactory;
},{"lib/gill/model/texture-data/repository.class":98}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformValueMap = function () {
    function StandardGillUniformValueMap() {
        _classCallCheck(this, StandardGillUniformValueMap);

        this.uniformValues = new Map();
    }

    _createClass(StandardGillUniformValueMap, [{
        key: "hasValue",
        value: function hasValue(uniformName) {
            return this.uniformValues.has(uniformName);
        }
    }, {
        key: "getValue",
        value: function getValue(uniformName) {
            return this.uniformValues.get(uniformName);
        }
    }, {
        key: "setValue",
        value: function setValue(uniformName, uniformValue) {
            this.uniformValues.set(uniformName, uniformValue);
        }
    }]);

    return StandardGillUniformValueMap;
}();

exports.default = StandardGillUniformValueMap;
},{}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniformValueMap = require("lib/gill/model/uniform-value-map.class");

var _uniformValueMap2 = _interopRequireDefault(_uniformValueMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformValueMapFactory = function () {
    function StandardGillUniformValueMapFactory() {
        _classCallCheck(this, StandardGillUniformValueMapFactory);
    }

    _createClass(StandardGillUniformValueMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _uniformValueMap2.default();
        }
    }]);

    return StandardGillUniformValueMapFactory;
}();

exports.default = StandardGillUniformValueMapFactory;
},{"lib/gill/model/uniform-value-map.class":100}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector2 = function () {
    function StandardGillVector2(v1, v2) {
        _classCallCheck(this, StandardGillVector2);

        this.v1 = v1;
        this.v2 = v2;
    }

    _createClass(StandardGillVector2, [{
        key: "addToAttributeData",
        value: function addToAttributeData(attributeData) {
            attributeData.push(this.v1);
            attributeData.push(this.v2);
        }
    }, {
        key: "toUniformData",
        value: function toUniformData() {
            return [this.v1, this.v2];
        }
    }]);

    return StandardGillVector2;
}();

exports.default = StandardGillVector2;
},{}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = require("lib/gill/model/vector2.class");

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector2Factory = function () {
    function StandardGillVector2Factory() {
        _classCallCheck(this, StandardGillVector2Factory);
    }

    _createClass(StandardGillVector2Factory, [{
        key: "construct",
        value: function construct(v1, v2) {
            return new _vector2.default(v1, v2);
        }
    }]);

    return StandardGillVector2Factory;
}();

exports.default = StandardGillVector2Factory;
},{"lib/gill/model/vector2.class":102}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector3 = function () {
    function StandardGillVector3(v1, v2, v3) {
        _classCallCheck(this, StandardGillVector3);

        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    _createClass(StandardGillVector3, [{
        key: "addToAttributeData",
        value: function addToAttributeData(attributeData) {
            attributeData.push(this.v1);
            attributeData.push(this.v2);
            attributeData.push(this.v3);
        }
    }, {
        key: "toUniformData",
        value: function toUniformData() {
            return [this.v1, this.v2, this.v3];
        }
    }]);

    return StandardGillVector3;
}();

exports.default = StandardGillVector3;
},{}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = require("lib/gill/model/vector3.class");

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector3Factory = function () {
    function StandardGillVector3Factory() {
        _classCallCheck(this, StandardGillVector3Factory);
    }

    _createClass(StandardGillVector3Factory, [{
        key: "construct",
        value: function construct(v1, v2, v3) {
            return new _vector2.default(v1, v2, v3);
        }
    }]);

    return StandardGillVector3Factory;
}();

exports.default = StandardGillVector3Factory;
},{"lib/gill/model/vector3.class":104}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVertex = function () {
    function StandardGillVertex(gillAttributeValues) {
        _classCallCheck(this, StandardGillVertex);

        this.gillAttributeValues = gillAttributeValues;
    }

    _createClass(StandardGillVertex, [{
        key: "eachAttribute",
        value: function eachAttribute(action) {
            this.gillAttributeValues.eachValue(action);
        }
    }, {
        key: "getAttribute",
        value: function getAttribute(name) {
            return this.gillAttributeValues.getValue(name);
        }
    }, {
        key: "setAttribute",
        value: function setAttribute(name, value) {
            this.gillAttributeValues.setValue(name, value);
            return this;
        }
    }]);

    return StandardGillVertex;
}();

exports.default = StandardGillVertex;
},{}],107:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vertex = require("lib/gill/model/vertex.class");

var _vertex2 = _interopRequireDefault(_vertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVertexFactory = function () {
    function StandardGillVertexFactory() {
        _classCallCheck(this, StandardGillVertexFactory);
    }

    _createClass(StandardGillVertexFactory, [{
        key: "construct",
        value: function construct(gillAttributeValues) {
            return new _vertex2.default(gillAttributeValues);
        }
    }]);

    return StandardGillVertexFactory;
}();

exports.default = StandardGillVertexFactory;
},{"lib/gill/model/vertex.class":106}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgramWebglServiceAdapter = function () {
    function ProgramWebglServiceAdapter(webglService) {
        _classCallCheck(this, ProgramWebglServiceAdapter);

        this.webglService = webglService;
    }

    _createClass(ProgramWebglServiceAdapter, [{
        key: "createWebglProgram",
        value: function createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            return this.webglService.createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "getAttributes",
        value: function getAttributes(webglRenderingContext, webglProgram) {
            return this.webglService.getAttributes(webglRenderingContext, webglProgram);
        }
    }, {
        key: "getUniforms",
        value: function getUniforms(webglRenderingContext, webglProgram) {
            return this.webglService.getUniforms(webglRenderingContext, webglProgram);
        }
    }]);

    return ProgramWebglServiceAdapter;
}();

exports.default = ProgramWebglServiceAdapter;
},{}],109:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/program-webgl-adapter/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardProgramWebglServiceAdapterFactory = function () {
    function StandardProgramWebglServiceAdapterFactory() {
        _classCallCheck(this, StandardProgramWebglServiceAdapterFactory);
    }

    _createClass(StandardProgramWebglServiceAdapterFactory, [{
        key: "construct",
        value: function construct(webglService) {
            return new _service2.default(webglService);
        }
    }]);

    return StandardProgramWebglServiceAdapterFactory;
}();

exports.default = StandardProgramWebglServiceAdapterFactory;
},{"lib/gill/program-webgl-adapter/service.class":108}],110:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgram = function () {
    function StandardGillProgram(webglRenderingContext, webglProgram, attributes, textures, uniforms) {
        _classCallCheck(this, StandardGillProgram);

        this.webglRenderingContext = webglRenderingContext;
        this.webglProgram = webglProgram;
        this.attributes = attributes;
        this.textures = textures;
        this.uniforms = uniforms;
    }

    _createClass(StandardGillProgram, [{
        key: "eachTexture",
        value: function eachTexture(action) {
            this.textures.eachTexture(action);
        }
    }, {
        key: "forEachAttribute",
        value: function forEachAttribute(action) {
            this.attributes.eachAttribute(action);
        }
    }, {
        key: "forEachUniform",
        value: function forEachUniform(action) {
            this.uniforms.eachUniform(action);
        }
    }, {
        key: "getWebglProgram",
        value: function getWebglProgram() {
            return this.webglProgram;
        }
    }, {
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext() {
            return this.webglRenderingContext;
        }
    }]);

    return StandardGillProgram;
}();

exports.default = StandardGillProgram;
},{}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardAttribute = function () {
    function StandardAttribute(name, type, location, usage) {
        _classCallCheck(this, StandardAttribute);

        this.name = name;
        this.type = type;
        this.location = location;
        this.usage = usage;
    }

    _createClass(StandardAttribute, [{
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getType",
        value: function getType() {
            return this.type;
        }
    }, {
        key: "getUsage",
        value: function getUsage() {
            return this.usage;
        }
    }]);

    return StandardAttribute;
}();

exports.default = StandardAttribute;
},{}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardAttributeCollection = function () {
    function StandardAttributeCollection() {
        _classCallCheck(this, StandardAttributeCollection);

        this.attributes = new Array();
    }

    _createClass(StandardAttributeCollection, [{
        key: "addAttribute",
        value: function addAttribute(attribute) {
            this.attributes.push(attribute);
        }
    }, {
        key: "eachAttribute",
        value: function eachAttribute(action) {
            this.attributes.forEach(function (attribute) {
                action(attribute);
            });
        }
    }]);

    return StandardAttributeCollection;
}();

exports.default = StandardAttributeCollection;
},{}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/gill/program/attribute/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardAttributeCollectionFactory = function () {
    function StandardAttributeCollectionFactory() {
        _classCallCheck(this, StandardAttributeCollectionFactory);
    }

    _createClass(StandardAttributeCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardAttributeCollectionFactory;
}();

exports.default = StandardAttributeCollectionFactory;
},{"lib/gill/program/attribute/collection.class":112}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attribute = require("lib/gill/program/attribute.class");

var _attribute2 = _interopRequireDefault(_attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardAttributeFactory = function () {
    function StandardAttributeFactory() {
        _classCallCheck(this, StandardAttributeFactory);
    }

    _createClass(StandardAttributeFactory, [{
        key: "construct",
        value: function construct(name, type, location, usage) {
            return new _attribute2.default(name, type, location, usage);
        }
    }]);

    return StandardAttributeFactory;
}();

exports.default = StandardAttributeFactory;
},{"lib/gill/program/attribute.class":111}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramCache = function () {
    function StandardGillProgramCache(gillContextSources, gillSourceProgramMapFactory) {
        _classCallCheck(this, StandardGillProgramCache);

        this.gillContextSources = gillContextSources;
        this.gillSourceProgramMapFactory = gillSourceProgramMapFactory;
    }

    _createClass(StandardGillProgramCache, [{
        key: "cacheProgram",
        value: function cacheProgram(webglRenderingContext, gillProgramSource, gillProgram) {
            var gillPrograms = this.gillContextSources.getSources(webglRenderingContext);
            if (gillPrograms === undefined) {
                gillPrograms = this.gillSourceProgramMapFactory.construct();
                this.gillContextSources.setSources(webglRenderingContext, gillPrograms);
            }
            gillPrograms.setProgram(gillProgramSource, gillProgram);
        }
    }, {
        key: "hasProgram",
        value: function hasProgram(webglRenderingContext, gillProgramSource) {
            var hasPrograms = this.gillContextSources.hasSources(webglRenderingContext);
            var hasProgram = false;
            if (hasPrograms) {
                hasProgram = this.gillContextSources.getSources(webglRenderingContext).hasProgram(gillProgramSource);
            }
            return hasProgram;
        }
    }, {
        key: "getProgram",
        value: function getProgram(webglRenderingContext, gillProgramSource) {
            var gillPrograms = this.gillContextSources.getSources(webglRenderingContext);
            var program = void 0;
            if (gillPrograms !== undefined) {
                program = gillPrograms.getProgram(gillProgramSource);
            }
            if (program === undefined) {
                throw new Error("No such cached program");
            }
            return program;
        }
    }]);

    return StandardGillProgramCache;
}();

exports.default = StandardGillProgramCache;
},{}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cache = require("lib/gill/program/cache.class");

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramCacheFactory = function () {
    function StandardGillProgramCacheFactory() {
        _classCallCheck(this, StandardGillProgramCacheFactory);
    }

    _createClass(StandardGillProgramCacheFactory, [{
        key: "construct",
        value: function construct(gillProgramSources, gillProgramMapFactory) {
            return new _cache2.default(gillProgramSources, gillProgramMapFactory);
        }
    }]);

    return StandardGillProgramCacheFactory;
}();

exports.default = StandardGillProgramCacheFactory;
},{"lib/gill/program/cache.class":115}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillContextSourceMap = function () {
    function StandardGillContextSourceMap() {
        _classCallCheck(this, StandardGillContextSourceMap);

        this.contextSources = new Map();
    }

    _createClass(StandardGillContextSourceMap, [{
        key: "hasSources",
        value: function hasSources(WebGLRenderingContext) {
            return this.contextSources.has(WebGLRenderingContext);
        }
    }, {
        key: "getSources",
        value: function getSources(WebGLRenderingContext) {
            return this.contextSources.get(WebGLRenderingContext);
        }
    }, {
        key: "setSources",
        value: function setSources(WebGLRenderingContext, gillProgramSources) {
            this.contextSources.set(WebGLRenderingContext, gillProgramSources);
        }
    }]);

    return StandardGillContextSourceMap;
}();

exports.default = StandardGillContextSourceMap;
},{}],118:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contextSourceMap = require("lib/gill/program/context-source-map.class");

var _contextSourceMap2 = _interopRequireDefault(_contextSourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillContextSourceMapFactory = function () {
    function StandardGillContextSourceMapFactory() {
        _classCallCheck(this, StandardGillContextSourceMapFactory);
    }

    _createClass(StandardGillContextSourceMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _contextSourceMap2.default();
        }
    }]);

    return StandardGillContextSourceMapFactory;
}();

exports.default = StandardGillContextSourceMapFactory;
},{"lib/gill/program/context-source-map.class":117}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _program = require("lib/gill/program.class");

var _program2 = _interopRequireDefault(_program);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramFactory = function () {
    function StandardGillProgramFactory() {
        _classCallCheck(this, StandardGillProgramFactory);
    }

    _createClass(StandardGillProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, webglProgram, attributes, textures, uniforms) {
            return new _program2.default(webglRenderingContext, webglProgram, attributes, textures, uniforms);
        }
    }]);

    return StandardGillProgramFactory;
}();

exports.default = StandardGillProgramFactory;
},{"lib/gill/program.class":110}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramService = function () {
    function StandardGillProgramService(attributeCollectionFactory, attributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglService, textureCollectionFactory, textureFactory, uniformCollectionFactory, uniformFactory, variableTypes) {
        _classCallCheck(this, StandardGillProgramService);

        this.attributeCollectionFactory = attributeCollectionFactory;
        this.attributeFactory = attributeFactory;
        this.gillProgramCache = gillProgramCache;
        this.gillProgramFactory = gillProgramFactory;
        this.gillProgramWebglService = gillProgramWebglService;
        this.textureCollectionFactory = textureCollectionFactory;
        this.textureFactory = textureFactory;
        this.uniformCollectionFactory = uniformCollectionFactory;
        this.uniformFactory = uniformFactory;
        this.variableTypes = variableTypes;
    }

    _createClass(StandardGillProgramService, [{
        key: "getProgram",
        value: function getProgram(webglRenderingContext, gillProgramSource) {
            var programExists = this.gillProgramCache.hasProgram(webglRenderingContext, gillProgramSource);
            var program = void 0;
            if (programExists) {
                program = this.gillProgramCache.getProgram(webglRenderingContext, gillProgramSource);
            } else {
                var webglProgram = this.gillProgramWebglService.createWebglProgram(webglRenderingContext, gillProgramSource.getVertexShaderSource(), gillProgramSource.getFragmentShaderSource());
                var attributeInfo = this.gillProgramWebglService.getAttributes(webglRenderingContext, webglProgram),
                    attributes = this.attributeCollectionFactory.construct(),
                    uniformInfo = this.gillProgramWebglService.getUniforms(webglRenderingContext, webglProgram),
                    textures = this.textureCollectionFactory.construct(),
                    uniforms = this.uniformCollectionFactory.construct();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = attributeInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var attribute = _step.value;

                        var location = webglRenderingContext.getAttribLocation(webglProgram, attribute.name);
                        webglRenderingContext.enableVertexAttribArray(location);
                        attributes.addAttribute(this.attributeFactory.construct(attribute.name, this.variableTypes.getWebglVariableType(attribute.type), location, webglRenderingContext.STATIC_DRAW));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = uniformInfo[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var uniform = _step2.value;

                        var _location = webglRenderingContext.getUniformLocation(webglProgram, uniform.name);
                        var isSampler2d = uniform.type === webglRenderingContext.SAMPLER_2D,
                            isSamplerCube = uniform.type === webglRenderingContext.SAMPLER_CUBE;
                        if (isSampler2d || isSamplerCube) {
                            var bindTarget = void 0,
                                imageTarget = void 0;
                            if (isSampler2d) {
                                bindTarget = webglRenderingContext.TEXTURE_2D;
                            } else {
                                bindTarget = webglRenderingContext.TEXTURE_CUBE_MAP;
                            }
                            if (isSampler2d) {
                                imageTarget = webglRenderingContext.TEXTURE_2D;
                            } else {
                                imageTarget = 0; //TODO I am not sure how this would even work...
                            }
                            textures.addTexture(this.textureFactory.construct(bindTarget, imageTarget, _location, uniform.name, this.variableTypes.getWebglVariableType(uniform.type)));
                        } else {
                            uniforms.addUniform(this.uniformFactory.construct(uniform.name, this.variableTypes.getWebglVariableType(uniform.type), _location));
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                program = this.gillProgramFactory.construct(webglRenderingContext, webglProgram, attributes, textures, uniforms);
                this.gillProgramCache.cacheProgram(webglRenderingContext, gillProgramSource, program);
            }
            return program;
        }
    }]);

    return StandardGillProgramService;
}();

exports.default = StandardGillProgramService;
},{}],121:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/program/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramServiceFactory = function () {
    function StandardGillProgramServiceFactory() {
        _classCallCheck(this, StandardGillProgramServiceFactory);
    }

    _createClass(StandardGillProgramServiceFactory, [{
        key: "construct",
        value: function construct(attributeCollectionFactory, attributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglService, textureCollectionFactory, textureFactory, uniformCollectionFactory, uniformFactory, variableTypes) {
            return new _service2.default(attributeCollectionFactory, attributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglService, textureCollectionFactory, textureFactory, uniformCollectionFactory, uniformFactory, variableTypes);
        }
    }]);

    return StandardGillProgramServiceFactory;
}();

exports.default = StandardGillProgramServiceFactory;
},{"lib/gill/program/service.class":120}],122:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillSourceProgramMap = function () {
    function StandardGillSourceProgramMap() {
        _classCallCheck(this, StandardGillSourceProgramMap);

        this.programs = new Map();
    }

    _createClass(StandardGillSourceProgramMap, [{
        key: "hasProgram",
        value: function hasProgram(gillProgramSource) {
            return this.programs.has(gillProgramSource);
        }
    }, {
        key: "getProgram",
        value: function getProgram(gillProgramSource) {
            return this.programs.get(gillProgramSource);
        }
    }, {
        key: "setProgram",
        value: function setProgram(gillProgramSource, gillProgram) {
            this.programs.set(gillProgramSource, gillProgram);
        }
    }]);

    return StandardGillSourceProgramMap;
}();

exports.default = StandardGillSourceProgramMap;
},{}],123:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sourceProgramMap = require("lib/gill/program/source-program-map.class");

var _sourceProgramMap2 = _interopRequireDefault(_sourceProgramMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramMapFactory = function () {
    function StandardGillProgramMapFactory() {
        _classCallCheck(this, StandardGillProgramMapFactory);
    }

    _createClass(StandardGillProgramMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _sourceProgramMap2.default();
        }
    }]);

    return StandardGillProgramMapFactory;
}();

exports.default = StandardGillProgramMapFactory;
},{"lib/gill/program/source-program-map.class":122}],124:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramSource = function () {
    function StandardGillProgramSource(vertexShaderShaderSource, fragmentShaderShaderSource) {
        _classCallCheck(this, StandardGillProgramSource);

        this.vertexShaderShaderSource = vertexShaderShaderSource;
        this.fragmentShaderShaderSource = fragmentShaderShaderSource;
    }

    _createClass(StandardGillProgramSource, [{
        key: "getFragmentShaderSource",
        value: function getFragmentShaderSource() {
            return this.fragmentShaderShaderSource;
        }
    }, {
        key: "getVertexShaderSource",
        value: function getVertexShaderSource() {
            return this.vertexShaderShaderSource;
        }
    }]);

    return StandardGillProgramSource;
}();

exports.default = StandardGillProgramSource;
},{}],125:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _source = require("lib/gill/program/source.class");

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramSourceFactory = function () {
    function StandardGillProgramSourceFactory() {
        _classCallCheck(this, StandardGillProgramSourceFactory);
    }

    _createClass(StandardGillProgramSourceFactory, [{
        key: "construct",
        value: function construct(vertexShaderShaderSource, fragmentShaderShaderSource) {
            return new _source2.default(vertexShaderShaderSource, fragmentShaderShaderSource);
        }
    }]);

    return StandardGillProgramSourceFactory;
}();

exports.default = StandardGillProgramSourceFactory;
},{"lib/gill/program/source.class":124}],126:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTexture = function () {
    function StandardTexture(bindTarget, imageTarget, location, name, type) {
        _classCallCheck(this, StandardTexture);

        this.bindTarget = bindTarget;
        this.imageTarget = imageTarget;
        this.location = location;
        this.name = name;
        this.type = type;
    }

    _createClass(StandardTexture, [{
        key: "getBindTarget",
        value: function getBindTarget() {
            return this.bindTarget;
        }
    }, {
        key: "getImageTarget",
        value: function getImageTarget() {
            return this.imageTarget;
        }
    }, {
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getType",
        value: function getType() {
            return this.type;
        }
    }]);

    return StandardTexture;
}();

exports.default = StandardTexture;
},{}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureCollection = function () {
    function StandardTextureCollection() {
        _classCallCheck(this, StandardTextureCollection);

        this.textures = new Array();
    }

    _createClass(StandardTextureCollection, [{
        key: "addTexture",
        value: function addTexture(texture) {
            this.textures.push(texture);
        }
    }, {
        key: "eachTexture",
        value: function eachTexture(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.textures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var texture = _step.value;

                    action(texture);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return StandardTextureCollection;
}();

exports.default = StandardTextureCollection;
},{}],128:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/gill/program/texture/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureCollectionFactory = function () {
    function StandardTextureCollectionFactory() {
        _classCallCheck(this, StandardTextureCollectionFactory);
    }

    _createClass(StandardTextureCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardTextureCollectionFactory;
}();

exports.default = StandardTextureCollectionFactory;
},{"lib/gill/program/texture/collection.class":127}],129:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _texture = require("lib/gill/program/texture.class");

var _texture2 = _interopRequireDefault(_texture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureFactory = function () {
    function StandardTextureFactory() {
        _classCallCheck(this, StandardTextureFactory);
    }

    _createClass(StandardTextureFactory, [{
        key: "construct",
        value: function construct(bindTarget, imageTarget, location, name, type) {
            return new _texture2.default(bindTarget, imageTarget, location, name, type);
        }
    }]);

    return StandardTextureFactory;
}();

exports.default = StandardTextureFactory;
},{"lib/gill/program/texture.class":126}],130:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardUniform = function () {
    function StandardUniform(name, type, location) {
        _classCallCheck(this, StandardUniform);

        this.name = name;
        this.type = type;
        this.location = location;
    }

    _createClass(StandardUniform, [{
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getType",
        value: function getType() {
            return this.type;
        }
    }]);

    return StandardUniform;
}();

exports.default = StandardUniform;
},{}],131:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardUniformCollection = function () {
    function StandardUniformCollection() {
        _classCallCheck(this, StandardUniformCollection);

        this.uniforms = new Array();
    }

    _createClass(StandardUniformCollection, [{
        key: "addUniform",
        value: function addUniform(uniform) {
            this.uniforms.push(uniform);
        }
    }, {
        key: "eachUniform",
        value: function eachUniform(action) {
            this.uniforms.forEach(function (uniform) {
                action(uniform);
            });
        }
    }]);

    return StandardUniformCollection;
}();

exports.default = StandardUniformCollection;
},{}],132:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/gill/program/uniform/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardUniformCollectionFactory = function () {
    function StandardUniformCollectionFactory() {
        _classCallCheck(this, StandardUniformCollectionFactory);
    }

    _createClass(StandardUniformCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardUniformCollectionFactory;
}();

exports.default = StandardUniformCollectionFactory;
},{"lib/gill/program/uniform/collection.class":131}],133:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniform = require("lib/gill/program/uniform.class");

var _uniform2 = _interopRequireDefault(_uniform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardUniformFactory = function () {
    function StandardUniformFactory() {
        _classCallCheck(this, StandardUniformFactory);
    }

    _createClass(StandardUniformFactory, [{
        key: "construct",
        value: function construct(name, type, location) {
            return new _uniform2.default(name, type, location);
        }
    }]);

    return StandardUniformFactory;
}();

exports.default = StandardUniformFactory;
},{"lib/gill/program/uniform.class":130}],134:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardVariableTypeMap = function () {
    function StandardVariableTypeMap() {
        _classCallCheck(this, StandardVariableTypeMap);

        this.gillWebglVariableTypes = new Map();
    }

    _createClass(StandardVariableTypeMap, [{
        key: "eachWebglVariableType",
        value: function eachWebglVariableType(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.gillWebglVariableTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        webglType = _step$value[0],
                        gillWebglVariableType = _step$value[1];

                    action(webglType, gillWebglVariableType);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasWebglVariableType",
        value: function hasWebglVariableType(webglType) {
            return this.gillWebglVariableTypes.has(webglType);
        }
    }, {
        key: "getWebglVariableType",
        value: function getWebglVariableType(webglType) {
            return this.gillWebglVariableTypes.get(webglType);
        }
    }, {
        key: "setWebglVariableType",
        value: function setWebglVariableType(webglType, gillWebglVariableType) {
            this.gillWebglVariableTypes.set(webglType, gillWebglVariableType);
        }
    }]);

    return StandardVariableTypeMap;
}();

exports.default = StandardVariableTypeMap;
},{}],135:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeMap = require("lib/gill/program/variable/type-map.class");

var _typeMap2 = _interopRequireDefault(_typeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardVariableTypeMapFactory = function () {
    function StandardVariableTypeMapFactory() {
        _classCallCheck(this, StandardVariableTypeMapFactory);
    }

    _createClass(StandardVariableTypeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _typeMap2.default();
        }
    }]);

    return StandardVariableTypeMapFactory;
}();

exports.default = StandardVariableTypeMapFactory;
},{"lib/gill/program/variable/type-map.class":134}],136:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardVariable = function () {
    function StandardVariable(dataType, typedArrayConstructor, unitSize) {
        _classCallCheck(this, StandardVariable);

        this.dataType = dataType;
        this.typedArrayConstructor = typedArrayConstructor;
        this.unitSize = unitSize;
    }

    _createClass(StandardVariable, [{
        key: "getDataType",
        value: function getDataType() {
            return this.dataType;
        }
    }, {
        key: "getTypedArrayConstructor",
        value: function getTypedArrayConstructor() {
            return this.typedArrayConstructor;
        }
    }, {
        key: "getUnitSize",
        value: function getUnitSize() {
            return this.unitSize;
        }
    }]);

    return StandardVariable;
}();

exports.default = StandardVariable;
},{}],137:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require("lib/gill/program/variable/type.class");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardVariableTypeFactory = function () {
    function StandardVariableTypeFactory() {
        _classCallCheck(this, StandardVariableTypeFactory);
    }

    _createClass(StandardVariableTypeFactory, [{
        key: "construct",
        value: function construct(dataType, typedArrayConstructor, unitSize) {
            return new _type2.default(dataType, typedArrayConstructor, unitSize);
        }
    }]);

    return StandardVariableTypeFactory;
}();

exports.default = StandardVariableTypeFactory;
},{"lib/gill/program/variable/type.class":136}],138:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillRenderer = function () {
    function StandardGillRenderer(gillModelBufferService, modelTextureRepository, gillProgram) {
        _classCallCheck(this, StandardGillRenderer);

        this.gillModelBufferService = gillModelBufferService;
        this.modelTextureRepository = modelTextureRepository;
        this.gillProgram = gillProgram;
        this.webglProgram = gillProgram.getWebglProgram();
        this.webglRenderingContext = gillProgram.getWebglRenderingContext();
    }

    _createClass(StandardGillRenderer, [{
        key: "drawModel",
        value: function drawModel(model) {
            var _this = this;

            this.webglRenderingContext.useProgram(this.webglProgram);
            // Bind attributes
            this.gillProgram.forEachAttribute(function (attribute) {
                var attributeName = attribute.getName(),
                    attributeType = attribute.getType();
                _this.webglRenderingContext.bindBuffer(_this.webglRenderingContext.ARRAY_BUFFER, _this.gillModelBufferService.getModelAttributeBuffer(model, attributeName, _this.webglRenderingContext));
                var attributeData = model.getAttributeData(attributeName);
                if (attributeData.needsBuffered()) {
                    var typedArrayConstructor = attributeType.getTypedArrayConstructor();
                    _this.webglRenderingContext.bufferData(_this.webglRenderingContext.ARRAY_BUFFER, typedArrayConstructor.from(attributeData.getData()), attribute.getUsage());
                    attributeData.setNeedsBuffered(false);
                }
                _this.webglRenderingContext.vertexAttribPointer(attribute.getLocation(), attributeType.getUnitSize(), attributeType.getDataType(), attributeData.normalize(), attributeData.getStride(), attributeData.getOffset());
            });
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, null);
            // Bind textures
            var currentTexture = 0;
            this.gillProgram.eachTexture(function (texture) {
                var name = texture.getName(),
                    type = texture.getType(),
                    unit = "TEXTURE" + currentTexture;
                var bindTarget = texture.getBindTarget(),
                    data = model.getTextureData(name),
                    format = data.getFormat();
                _this.webglRenderingContext.activeTexture(_this.webglRenderingContext[unit]);
                _this.webglRenderingContext.bindTexture(bindTarget, _this.modelTextureRepository.getTexture(model, name, _this.webglRenderingContext));
                if (data.needsBuffered()) {
                    _this.webglRenderingContext.texImage2D(texture.getImageTarget(), 0, format, format, type.getDataType(), data.getPixels());
                    data.setNeedsBuffered(false);
                }
                _this.webglRenderingContext.uniform1i(texture.getLocation(), currentTexture);
                currentTexture += 1;
            });
            // Bind uniforms
            this.gillProgram.forEachUniform(function (uniform) {
                var uniformType = uniform.getType();
                var size = uniformType.getUnitSize(),
                    type = uniformType.getDataType() === _this.webglRenderingContext.FLOAT ? "f" : "i";
                var uniformFunction = "uniform" + size + type + "v";
                _this.webglRenderingContext[uniformFunction](uniform.getLocation(), model.getUniformData(uniform.getName()));
            });
            var modelIndices = model.getIndexData();
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, this.gillModelBufferService.getModelIndexBuffer(model, this.webglRenderingContext));
            if (model.getBufferIndices()) {
                this.webglRenderingContext.bufferData(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, Uint16Array.from(modelIndices), this.webglRenderingContext.STATIC_DRAW);
                model.setBufferIndices(false);
            }
            // Draw Elements
            this.webglRenderingContext.drawElements(this.webglRenderingContext.TRIANGLES, modelIndices.length, this.webglRenderingContext.UNSIGNED_SHORT, 0);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, null);
            this.webglRenderingContext.useProgram(null);
        }
    }]);

    return StandardGillRenderer;
}();

exports.default = StandardGillRenderer;
},{}],139:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require("lib/gill/renderer.class");

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillRendererFactory = function () {
    function StandardGillRendererFactory() {
        _classCallCheck(this, StandardGillRendererFactory);
    }

    _createClass(StandardGillRendererFactory, [{
        key: "construct",
        value: function construct(gillModelBufferService, modelTextureRepository, gillProgram) {
            return new _renderer2.default(gillModelBufferService, modelTextureRepository, gillProgram);
        }
    }]);

    return StandardGillRendererFactory;
}();

exports.default = StandardGillRendererFactory;
},{"lib/gill/renderer.class":138}],140:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillRendererService = function () {
    function StandardGillRendererService(modelTextureRepository, gillProgramService, gillRendererFactory) {
        _classCallCheck(this, StandardGillRendererService);

        this.modelTextureRepository = modelTextureRepository;
        this.gillProgramService = gillProgramService;
        this.gillRendererFactory = gillRendererFactory;
    }

    _createClass(StandardGillRendererService, [{
        key: "getRenderer",
        value: function getRenderer(webglRenderingContext, gillModelBufferService, gillProgramSource) {
            var gillProgram = this.gillProgramService.getProgram(webglRenderingContext, gillProgramSource);
            return this.gillRendererFactory.construct(gillModelBufferService, this.modelTextureRepository, //TODO This probably is not right
            gillProgram);
        }
    }]);

    return StandardGillRendererService;
}();

exports.default = StandardGillRendererService;
},{}],141:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/renderer/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillRendererServiceFactory = function () {
    function StandardGillRendererServiceFactory() {
        _classCallCheck(this, StandardGillRendererServiceFactory);
    }

    _createClass(StandardGillRendererServiceFactory, [{
        key: "construct",
        value: function construct(modelTextureRepository, gillProgramService, gillRendererFactory) {
            return new _service2.default(modelTextureRepository, gillProgramService, gillRendererFactory);
        }
    }]);

    return StandardGillRendererServiceFactory;
}();

exports.default = StandardGillRendererServiceFactory;
},{"lib/gill/renderer/service.class":140}],142:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillService = function () {
    function StandardGillService(attributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, gillProgramSourceFactory, gillRendererService, textureDataRepository, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, gillWebglService) {
        _classCallCheck(this, StandardGillService);

        this.attributeDataRepository = attributeDataRepository;
        this.gillAttributeValueMapFactory = gillAttributeValueMapFactory;
        this.gillIndexCollectionFactory = gillIndexCollectionFactory;
        this.gillModelBufferService = gillModelBufferService;
        this.gillModelFactory = gillModelFactory;
        this.gillNumberFactory = gillNumberFactory;
        this.gillProgramSourceFactory = gillProgramSourceFactory;
        this.gillRendererService = gillRendererService;
        this.textureDataRepository = textureDataRepository;
        this.gillUniformValueMapFactory = gillUniformValueMapFactory;
        this.gillVector2Factory = gillVector2Factory;
        this.gillVector3Factory = gillVector3Factory;
        this.gillVertexFactory = gillVertexFactory;
        this.gillWebglService = gillWebglService;
    }

    _createClass(StandardGillService, [{
        key: "clearCanvas",
        value: function clearCanvas(canvas) {
            var webglRenderingContext = this.gillWebglService.getWebglContext(canvas);
            webglRenderingContext.clear(webglRenderingContext.COLOR_BUFFER_BIT | webglRenderingContext.DEPTH_BUFFER_BIT);
        }
    }, {
        key: "createModel",
        value: function createModel() {
            return this.gillModelFactory.construct(this.attributeDataRepository, this.gillIndexCollectionFactory.construct(), this.textureDataRepository, this.gillUniformValueMapFactory.construct());
        }
    }, {
        key: "createNumber",
        value: function createNumber(value) {
            return this.gillNumberFactory.construct(value);
        }
    }, {
        key: "createVector2",
        value: function createVector2(v1, v2) {
            return this.gillVector2Factory.construct(v1, v2);
        }
    }, {
        key: "createVector3",
        value: function createVector3(v1, v2, v3) {
            return this.gillVector3Factory.construct(v1, v2, v3);
        }
    }, {
        key: "createVertex",
        value: function createVertex() {
            return this.gillVertexFactory.construct(this.gillAttributeValueMapFactory.construct());
        }
    }, {
        key: "drawModel",
        value: function drawModel(model, canvas, gillProgram) {
            var webglRenderingContext = this.gillWebglService.getWebglContext(canvas);
            var gillRenderer = this.gillRendererService.getRenderer(webglRenderingContext, this.gillModelBufferService, gillProgram);
            gillRenderer.drawModel(model);
        }
    }, {
        key: "getProgram",
        value: function getProgram(vertexShaderSource, fragmentShaderSource) {
            return this.gillProgramSourceFactory.construct(vertexShaderSource, fragmentShaderSource);
        }
    }]);

    return StandardGillService;
}();

exports.default = StandardGillService;
},{}],143:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillServiceFactory = function () {
    function StandardGillServiceFactory() {
        _classCallCheck(this, StandardGillServiceFactory);
    }

    _createClass(StandardGillServiceFactory, [{
        key: "construct",
        value: function construct(gillModelAttributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, gillProgramSourceFactory, gillRendererService, textureDataRepository, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, gillWebglService) {
            return new _service2.default(gillModelAttributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, gillProgramSourceFactory, gillRendererService, textureDataRepository, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, gillWebglService);
        }
    }]);

    return StandardGillServiceFactory;
}();

exports.default = StandardGillServiceFactory;
},{"lib/gill/service.class":142}],144:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglBufferRenderingContextMap = function () {
    function StandardWebglBufferRenderingContextMap() {
        _classCallCheck(this, StandardWebglBufferRenderingContextMap);

        this.webglRenderingContexts = new Map();
    }

    _createClass(StandardWebglBufferRenderingContextMap, [{
        key: "eachWebglRenderingContext",
        value: function eachWebglRenderingContext(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.webglRenderingContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        webglBuffer = _step$value[0],
                        webglRenderingContext = _step$value[1];

                    action(webglBuffer, webglRenderingContext);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasWebglRenderingContext",
        value: function hasWebglRenderingContext(webglBuffer) {
            return this.webglRenderingContexts.has(webglBuffer);
        }
    }, {
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext(webglBuffer) {
            return this.webglRenderingContexts.get(webglBuffer);
        }
    }, {
        key: "setWebglRenderingContext",
        value: function setWebglRenderingContext(webglBuffer, webglRenderingContext) {
            this.webglRenderingContexts.set(webglBuffer, webglRenderingContext);
        }
    }]);

    return StandardWebglBufferRenderingContextMap;
}();

exports.default = StandardWebglBufferRenderingContextMap;
},{}],145:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bufferRenderingContextMap = require("lib/gill/webgl/buffer-rendering-context-map.class");

var _bufferRenderingContextMap2 = _interopRequireDefault(_bufferRenderingContextMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglBufferRenderingContextMapFactory = function () {
    function StandardWebglBufferRenderingContextMapFactory() {
        _classCallCheck(this, StandardWebglBufferRenderingContextMapFactory);
    }

    _createClass(StandardWebglBufferRenderingContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _bufferRenderingContextMap2.default();
        }
    }]);

    return StandardWebglBufferRenderingContextMapFactory;
}();

exports.default = StandardWebglBufferRenderingContextMapFactory;
},{"lib/gill/webgl/buffer-rendering-context-map.class":144}],146:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglProgramRenderingContextMap = function () {
    function StandardWebglProgramRenderingContextMap() {
        _classCallCheck(this, StandardWebglProgramRenderingContextMap);

        this.webglRenderingContexts = new Map();
    }

    _createClass(StandardWebglProgramRenderingContextMap, [{
        key: "eachWebglRenderingContext",
        value: function eachWebglRenderingContext(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.webglRenderingContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        webglProgram = _step$value[0],
                        webglRenderingContext = _step$value[1];

                    action(webglProgram, webglRenderingContext);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasWebglRenderingContext",
        value: function hasWebglRenderingContext(webglProgram) {
            return this.webglRenderingContexts.has(webglProgram);
        }
    }, {
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext(webglProgram) {
            return this.webglRenderingContexts.get(webglProgram);
        }
    }, {
        key: "setWebglRenderingContext",
        value: function setWebglRenderingContext(webglProgram, webglRenderingContext) {
            this.webglRenderingContexts.set(webglProgram, webglRenderingContext);
        }
    }]);

    return StandardWebglProgramRenderingContextMap;
}();

exports.default = StandardWebglProgramRenderingContextMap;
},{}],147:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _programRenderingContextMap = require("lib/gill/webgl/program-rendering-context-map.class");

var _programRenderingContextMap2 = _interopRequireDefault(_programRenderingContextMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglProgramRenderingContextMapFactory = function () {
    function StandardWebglProgramRenderingContextMapFactory() {
        _classCallCheck(this, StandardWebglProgramRenderingContextMapFactory);
    }

    _createClass(StandardWebglProgramRenderingContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _programRenderingContextMap2.default();
        }
    }]);

    return StandardWebglProgramRenderingContextMapFactory;
}();

exports.default = StandardWebglProgramRenderingContextMapFactory;
},{"lib/gill/webgl/program-rendering-context-map.class":146}],148:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglProgramFactory = function () {
    function StandardWebglProgramFactory() {
        _classCallCheck(this, StandardWebglProgramFactory);
    }

    _createClass(StandardWebglProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, vertexShader, fragmentShader) {
            var webglProgram = webglRenderingContext.createProgram();
            webglRenderingContext.attachShader(webglProgram, vertexShader);
            webglRenderingContext.attachShader(webglProgram, fragmentShader);
            webglRenderingContext.linkProgram(webglProgram);
            var linkedSuccessfully = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS);
            if (!linkedSuccessfully) {
                var errorMessage = webglRenderingContext.getProgramInfoLog(webglProgram);
                throw new Error("Unable to initialize the WebGL program: " + errorMessage);
            }
            return webglProgram;
        }
    }]);

    return StandardWebglProgramFactory;
}();

exports.default = StandardWebglProgramFactory;
},{}],149:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglRenderingContextRepository = function () {
    function StandardWebglRenderingContextRepository() {
        _classCallCheck(this, StandardWebglRenderingContextRepository);
    }

    _createClass(StandardWebglRenderingContextRepository, [{
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext(canvas) {
            var webglRenderingContext = canvas.getContext("webgl");
            if (webglRenderingContext === null) {
                webglRenderingContext = canvas.getContext("experimental-webgl");
            }
            return webglRenderingContext;
        }
    }]);

    return StandardWebglRenderingContextRepository;
}();

exports.default = StandardWebglRenderingContextRepository;
},{}],150:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderingContextRepository = require("lib/gill/webgl/rendering-context-repository.class");

var _renderingContextRepository2 = _interopRequireDefault(_renderingContextRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglRenderingContextRepositoryFactory = function () {
    function StandardGillWebglRenderingContextRepositoryFactory() {
        _classCallCheck(this, StandardGillWebglRenderingContextRepositoryFactory);
    }

    _createClass(StandardGillWebglRenderingContextRepositoryFactory, [{
        key: "construct",
        value: function construct() {
            return new _renderingContextRepository2.default();
        }
    }]);

    return StandardGillWebglRenderingContextRepositoryFactory;
}();

exports.default = StandardGillWebglRenderingContextRepositoryFactory;
},{"lib/gill/webgl/rendering-context-repository.class":149}],151:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglService = function () {
    function StandardWebglService(webglBufferRenderingContexts, webglProgramFactory, webglProgramRenderingContexts, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContexts) {
        _classCallCheck(this, StandardWebglService);

        this.webglBufferRenderingContexts = webglBufferRenderingContexts;
        this.webglProgramFactory = webglProgramFactory;
        this.webglProgramRenderingContexts = webglProgramRenderingContexts;
        this.webglRenderingContextRepository = webglRenderingContextRepository;
        this.webglShaderFactory = webglShaderFactory;
        this.webglTextureRenderingContexts = webglTextureRenderingContexts;
    }

    _createClass(StandardWebglService, [{
        key: "createWebglBuffer",
        value: function createWebglBuffer(webglRenderingContext) {
            var webglBuffer = webglRenderingContext.createBuffer();
            this.webglBufferRenderingContexts.setWebglRenderingContext(webglBuffer, webglRenderingContext);
            return webglBuffer;
        }
    }, {
        key: "createWebglProgram",
        value: function createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            var fragmentShader = this.webglShaderFactory.construct(webglRenderingContext, fragmentShaderSource, webglRenderingContext.FRAGMENT_SHADER),
                vertexShader = this.webglShaderFactory.construct(webglRenderingContext, vertexShaderSource, webglRenderingContext.VERTEX_SHADER);
            var webglProgram = this.webglProgramFactory.construct(webglRenderingContext, vertexShader, fragmentShader);
            this.webglProgramRenderingContexts.setWebglRenderingContext(webglProgram, webglRenderingContext);
            return webglProgram;
        }
    }, {
        key: "createWebglTexture",
        value: function createWebglTexture(webglRenderingContext) {
            var webglTexture = webglRenderingContext.createTexture();
            //TODO Remove hard-coding
            webglRenderingContext.bindTexture(webglRenderingContext.TEXTURE_2D, webglTexture);
            webglRenderingContext.texParameteri(webglRenderingContext.TEXTURE_2D, webglRenderingContext.TEXTURE_MIN_FILTER, webglRenderingContext.LINEAR);
            webglRenderingContext.texParameteri(webglRenderingContext.TEXTURE_2D, webglRenderingContext.TEXTURE_WRAP_S, webglRenderingContext.REPEAT);
            webglRenderingContext.texParameteri(webglRenderingContext.TEXTURE_2D, webglRenderingContext.TEXTURE_WRAP_T, webglRenderingContext.REPEAT);
            webglRenderingContext.bindTexture(webglRenderingContext.TEXTURE_2D, null);
            this.webglTextureRenderingContexts.setWebglRenderingContext(webglTexture, webglRenderingContext);
            return webglTexture;
        }
    }, {
        key: "getAttributes",
        value: function getAttributes(webglRenderingContext, webglProgram) {
            var attributeCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_ATTRIBUTES);
            var attributes = new Array(attributeCount);
            for (var attributeIndex = 0; attributeIndex < attributeCount; attributeIndex += 1) {
                attributes[attributeIndex] = webglRenderingContext.getActiveAttrib(webglProgram, attributeIndex);
            }
            return attributes;
        }
    }, {
        key: "getUniforms",
        value: function getUniforms(webglRenderingContext, webglProgram) {
            var uniformCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_UNIFORMS);
            var uniforms = new Array(uniformCount);
            for (var uniformIndex = 0; uniformIndex < uniformCount; uniformIndex += 1) {
                uniforms[uniformIndex] = webglRenderingContext.getActiveUniform(webglProgram, uniformIndex);
            }
            return uniforms;
        }
    }, {
        key: "getWebglContext",
        value: function getWebglContext(canvas) {
            return this.webglRenderingContextRepository.getWebglRenderingContext(canvas);
        }
    }]);

    return StandardWebglService;
}();

exports.default = StandardWebglService;
},{}],152:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/webgl/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglServiceFactory = function () {
    function StandardWebglServiceFactory() {
        _classCallCheck(this, StandardWebglServiceFactory);
    }

    _createClass(StandardWebglServiceFactory, [{
        key: "construct",
        value: function construct(webglBufferRenderingContexts, webglProgramFactory, webglProgramRenderingContexts, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContexts) {
            return new _service2.default(webglBufferRenderingContexts, webglProgramFactory, webglProgramRenderingContexts, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContexts);
        }
    }]);

    return StandardWebglServiceFactory;
}();

exports.default = StandardWebglServiceFactory;
},{"lib/gill/webgl/service.class":151}],153:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglShaderFactory = function () {
    function StandardWebglShaderFactory() {
        _classCallCheck(this, StandardWebglShaderFactory);
    }

    _createClass(StandardWebglShaderFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, shaderSource, shaderType) {
            var shader = webglRenderingContext.createShader(shaderType);
            webglRenderingContext.shaderSource(shader, shaderSource);
            webglRenderingContext.compileShader(shader);
            var compiledSuccessfully = webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS);
            if (!compiledSuccessfully) {
                var errorMessage = webglRenderingContext.getShaderInfoLog(shader),
                    shaderName = shaderType === webglRenderingContext.FRAGMENT_SHADER ? "fragment" : "vertex";
                webglRenderingContext.deleteShader(shader);
                throw new Error("An error occurred compiling the " + shaderName + " shader: " + errorMessage);
            }
            return shader;
        }
    }]);

    return StandardWebglShaderFactory;
}();

exports.default = StandardWebglShaderFactory;
},{}]},{},[2]);
