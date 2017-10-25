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
},{"lib/gill/attribute-buffer-map/factory.class":42}],2:[function(require,module,exports){
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
},{"app/gill/buffer-cache/factory":3,"app/gill/context-models-map/factory":5,"app/gill/model-buffer-map/factory":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/buffer-cache/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferCacheFactory = new _factory2.default();
exports.default = gillBufferCacheFactory;
},{"lib/gill/buffer-cache/factory.class":44}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/buffer/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferFactory = new _factory2.default();
exports.default = gillBufferFactory;
},{"lib/gill/buffer/factory.class":46}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/context-models-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillContextModelsMapFactory = new _factory2.default();
exports.default = gillContextModelsMapFactory;
},{"lib/gill/context-models-map/factory.class":48}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model-buffer-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelBufferMapFactory = new _factory2.default();
exports.default = gillModelBufferMapFactory;
},{"lib/gill/model-buffer-map/factory.class":50}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/attribute-value-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeValueMapFactory = new _factory2.default();
exports.default = gillAttributeValueMapFactory;
},{"lib/gill/model/attribute-value-map/factory.class":53}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/changed-attribute-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillChangedAttributeMapFactory = new _factory2.default();
exports.default = gillChangedAttributeMapFactory;
},{"lib/gill/model/changed-attribute-map/factory.class":55}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelFactory = new _factory2.default();
exports.default = gillModelFactory;
},{"lib/gill/model/factory.class":56}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/index-collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillIndexCollectionFactory = new _factory2.default();
exports.default = gillIndexCollectionFactory;
},{"lib/gill/model/index-collection/factory.class":58}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/number/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillNumberFactory = new _factory2.default();
exports.default = gillNumberFactory;
},{"lib/gill/model/number/factory.class":60}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/uniform-value-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformValueMapFactory = new _factory2.default();
exports.default = gillUniformValueMapFactory;
},{"lib/gill/model/uniform-value-map/factory.class":62}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vector2/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVector2Factory = new _factory2.default();
exports.default = gillVector2Factory;
},{"lib/gill/model/vector2/factory.class":64}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vector3/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVector3Factory = new _factory2.default();
exports.default = gillVector3Factory;
},{"lib/gill/model/vector3/factory.class":66}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vertex/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVertexCollectionFactory = new _factory2.default();
exports.default = gillVertexCollectionFactory;
},{"lib/gill/model/vertex/collection/factory.class":69}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/model/vertex/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillVertexFactory = new _factory2.default();
exports.default = gillVertexFactory;
},{"lib/gill/model/vertex/factory.class":70}],17:[function(require,module,exports){
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
},{"app/gill/program/cache/factory":18,"app/gill/program/context-source-map/factory":19,"app/gill/program/source-program-map/factory":23}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/cache/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramCache = new _factory2.default();
exports.default = gillProgramCache;
},{"lib/gill/program/cache/factory.class":73}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/context-source-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillContextSourceMapFactory = new _factory2.default();
exports.default = gillContextSourceMapFactory;
},{"lib/gill/program/context-source-map/factory.class":75}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramFactory = new _factory2.default();
exports.default = gillProgramFactory;
},{"lib/gill/program/factory.class":76}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cache = require("app/gill/program/cache");

var _cache2 = _interopRequireDefault(_cache);

var _factory = require("app/gill/program/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/service/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _service = require("app/gill/webgl/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramService = _factory4.default.construct(_cache2.default, _factory2.default, _service2.default);
exports.default = gillProgramService;
},{"app/gill/program/cache":17,"app/gill/program/factory":20,"app/gill/program/service/factory":22,"app/gill/webgl/service":32}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramServiceFactory = new _factory2.default();
exports.default = gillProgramServiceFactory;
},{"lib/gill/program/service/factory.class":78}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/source-program-map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillSourceProgramMapFactory = new _factory2.default();
exports.default = gillSourceProgramMapFactory;
},{"lib/gill/program/source-program-map/factory.class":80}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/program/source/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var standardGillProgramSourceFactory = new _factory2.default();
exports.default = standardGillProgramSourceFactory;
},{"lib/gill/program/source/factory.class":82}],25:[function(require,module,exports){
"use strict";

var _factory = require("app/gill/attribute-buffer-map/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/model/attribute-value-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/buffer/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _bufferCache = require("app/gill/buffer-cache");

var _bufferCache2 = _interopRequireDefault(_bufferCache);

var _factory7 = require("app/gill/context-models-map/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _factory9 = require("app/gill/model-buffer-map/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/gill/model/changed-attribute-map/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _factory13 = require("app/gill/model/index-collection/factory");

var _factory14 = _interopRequireDefault(_factory13);

var _factory15 = require("app/gill/model/factory");

var _factory16 = _interopRequireDefault(_factory15);

var _factory17 = require("app/gill/model/number/factory");

var _factory18 = _interopRequireDefault(_factory17);

var _service = require("app/gill/program/service");

var _service2 = _interopRequireDefault(_service);

var _factory19 = require("app/gill/program/source/factory");

var _factory20 = _interopRequireDefault(_factory19);

var _factory21 = require("app/gill/model/uniform-value-map/factory");

var _factory22 = _interopRequireDefault(_factory21);

var _factory23 = require("app/gill/model/vector2/factory");

var _factory24 = _interopRequireDefault(_factory23);

var _factory25 = require("app/gill/model/vector3/factory");

var _factory26 = _interopRequireDefault(_factory25);

var _factory27 = require("app/gill/model/vertex/collection/factory");

var _factory28 = _interopRequireDefault(_factory27);

var _factory29 = require("app/gill/model/vertex/factory");

var _factory30 = _interopRequireDefault(_factory29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.gillAttributeBufferMapFactory = _factory2.default;
window.gillAttributeValueMapFactory = _factory4.default;
window.gillBufferFactory = _factory6.default;
window.gillBufferCache = _bufferCache2.default;
window.gillContextModelsMapFactory = _factory8.default;
window.gillModelBufferMapFactory = _factory10.default;
window.gillChangedAttributeMapFactory = _factory12.default;
window.gillIndexCollectionFactory = _factory14.default;
window.gillModelFactory = _factory16.default;
window.gillNumberFactory = _factory18.default;
window.gillProgramService = _service2.default;
window.gillProgramSourceFactory = _factory20.default;
window.gillUniformValueMapFactory = _factory22.default;
window.gillVector2Factory = _factory24.default;
window.gillVector3Factory = _factory26.default;
window.gillVertexCollectionFactory = _factory28.default;
window.gillVertexFactory = _factory30.default;
},{"app/gill/attribute-buffer-map/factory":1,"app/gill/buffer-cache":2,"app/gill/buffer/factory":4,"app/gill/context-models-map/factory":5,"app/gill/model-buffer-map/factory":6,"app/gill/model/attribute-value-map/factory":7,"app/gill/model/changed-attribute-map/factory":8,"app/gill/model/factory":9,"app/gill/model/index-collection/factory":10,"app/gill/model/number/factory":11,"app/gill/model/uniform-value-map/factory":12,"app/gill/model/vector2/factory":13,"app/gill/model/vector3/factory":14,"app/gill/model/vertex/collection/factory":15,"app/gill/model/vertex/factory":16,"app/gill/program/service":21,"app/gill/program/source/factory":24}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/attribute/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeCollectionFactory = new _factory2.default();
exports.default = gillAttributeCollectionFactory;
},{"lib/gill/webgl/attribute/collection/factory.class":85}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/attribute/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeFactory = new _factory2.default();
exports.default = gillAttributeFactory;
},{"lib/gill/webgl/attribute/factory.class":86}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/attribute/type/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeTypeFactory = new _factory2.default();
exports.default = gillAttributeTypeFactory;
},{"lib/gill/webgl/attribute/type/factory.class":88}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/attribute/type/map/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeTypeMap = _factory2.default.construct();
exports.default = gillAttributeTypeMap;
},{"app/gill/webgl/attribute/type/map/factory":30}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/attribute/type/map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillAttributeTypeMapFactory = new _factory2.default();
exports.default = gillAttributeTypeMapFactory;
},{"lib/gill/webgl/attribute/type/map/factory.class":90}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/program/factory.class");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/webgl/shader/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglProgramFactory = new _factory2.default(_factory4.default);
exports.default = gillWebglProgramFactory;
},{"app/gill/webgl/shader/factory":34,"lib/gill/webgl/program/factory.class":91}],32:[function(require,module,exports){
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
_factory2.default, 2);
webglService.setAttributeType(35665, // gl.FLOAT_VEC3
5126, _factory2.default, 3);
//TODO Move this to map instantiation
// Set up uniform types
webglService.setUniformType(5126, // gl.FLOAT
"f", // uniformXfv
1);
exports.default = webglService;
},{"app/gill/webgl/attribute/collection/factory":26,"app/gill/webgl/attribute/factory":27,"app/gill/webgl/attribute/type/factory":28,"app/gill/webgl/attribute/type/map":29,"app/gill/webgl/program/factory":31,"app/gill/webgl/service/factory":33,"app/gill/webgl/typed-array/float32-array/factory":35,"app/gill/webgl/uniform/collection/factory":36,"app/gill/webgl/uniform/factory":37,"app/gill/webgl/uniform/type/factory":38,"app/gill/webgl/uniform/type/map":39}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/service/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglServiceFactory = new _factory2.default();
exports.default = gillWebglServiceFactory;
},{"lib/gill/webgl/service/factory.class":93}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/shader/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglShaderFactory = new _factory2.default();
exports.default = gillWebglShaderFactory;
},{"lib/gill/webgl/shader/factory.class":94}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/typed-array/float32-array/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillFloat32ArrayFactory = new _factory2.default();
exports.default = gillFloat32ArrayFactory;
},{"lib/gill/webgl/typed-array/float32-array/factory.class":95}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/uniform/collection/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformCollectionFactory = new _factory2.default();
exports.default = gillUniformCollectionFactory;
},{"lib/gill/webgl/uniform/collection/factory.class":98}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/uniform/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformFactory = new _factory2.default();
exports.default = gillUniformFactory;
},{"lib/gill/webgl/uniform/factory.class":99}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/uniform/type/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformTypeFactory = new _factory2.default();
exports.default = gillUniformTypeFactory;
},{"lib/gill/webgl/uniform/type/factory.class":101}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/uniform/type/map/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformTypeMap = _factory2.default.construct();
exports.default = gillUniformTypeMap;
},{"app/gill/webgl/uniform/type/map/factory":40}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("lib/gill/webgl/uniform/type/map/factory.class");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillUniformTypeMapFactory = new _factory2.default();
exports.default = gillUniformTypeMapFactory;
},{"lib/gill/webgl/uniform/type/map/factory.class":103}],41:[function(require,module,exports){
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
},{}],42:[function(require,module,exports){
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
},{"lib/gill/attribute-buffer-map.class":41}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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
},{"lib/gill/buffer-cache.class":43}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
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
},{"lib/gill/buffer.class":45}],47:[function(require,module,exports){
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
},{}],48:[function(require,module,exports){
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
},{"lib/gill/context-models-map.class":47}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{"lib/gill/model-buffer-map.class":49}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModel = function () {
    function StandardGillModel(changedAttributes, indices, uniformValues, vertices) {
        _classCallCheck(this, StandardGillModel);

        this.changedAttributes = changedAttributes;
        this.indices = indices;
        this.uniformValues = uniformValues;
        this.vertices = vertices;
        this.indicesChanged = false;
    }

    _createClass(StandardGillModel, [{
        key: "addVertex",
        value: function addVertex(vertex) {
            var _this = this;

            this.vertices.addVertex(vertex);
            this.indices.addIndex(this.indices.indexCount());
            this.indicesChanged = true;
            //TODO Derive changed attributes from changed vertices as well? How to handle vertex updates. Could make vertices
            //     immutable (somehow) and have a "replaceVertex" method. I do not like that, though. Another option is to
            //     create an AttributeService to interact with attributes on a model. It would handle triggering "needs changed"
            //     sort of communication as attributes are updated.
            this.changedAttributes.eachChanged(function (attributeName, attributeChanged) {
                _this.changedAttributes.setChanged(attributeName, true);
            });
            return this;
        }
    }, {
        key: "getAttributeData",
        value: function getAttributeData(attributeName) {
            //TODO Error handling
            var attributeData = new Array();
            this.vertices.eachVertex(function (vertex) {
                vertex.getAttribute(attributeName).addToAttributeData(attributeData);
            });
            return attributeData;
        }
    }, {
        key: "getBufferAttribute",
        value: function getBufferAttribute(attributeName) {
            var trackingAttribute = this.changedAttributes.hasChanged(attributeName);
            var rebufferAttribute = true;
            if (trackingAttribute) {
                rebufferAttribute = this.changedAttributes.getChanged(attributeName);
            }
            return rebufferAttribute;
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
        key: "getUniformData",
        value: function getUniformData(uniformName) {
            //TODO Error handling
            return this.uniformValues.getValue(uniformName).toUniformData();
        }
    }, {
        key: "setBufferAttribute",
        value: function setBufferAttribute(attributeName, bufferAttribute) {
            this.changedAttributes.setChanged(attributeName, bufferAttribute);
        }
    }, {
        key: "setBufferIndices",
        value: function setBufferIndices(indicesChanged) {
            this.indicesChanged = indicesChanged;
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
},{}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
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
},{"lib/gill/model/attribute-value-map.class":52}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillChangedAttributeMap = function () {
    function StandardGillChangedAttributeMap() {
        _classCallCheck(this, StandardGillChangedAttributeMap);

        this.attributeChanges = new Map();
    }

    _createClass(StandardGillChangedAttributeMap, [{
        key: "eachChanged",
        value: function eachChanged(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.attributeChanges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        attributeName = _step$value[0],
                        attributeChanged = _step$value[1];

                    action(attributeName, attributeChanged);
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
        key: "hasChanged",
        value: function hasChanged(attributeName) {
            return this.attributeChanges.has(attributeName);
        }
    }, {
        key: "getChanged",
        value: function getChanged(attributeName) {
            return this.attributeChanges.get(attributeName);
        }
    }, {
        key: "setChanged",
        value: function setChanged(attributeName, attributeChanged) {
            this.attributeChanges.set(attributeName, attributeChanged);
        }
    }]);

    return StandardGillChangedAttributeMap;
}();

exports.default = StandardGillChangedAttributeMap;
},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changedAttributeMap = require("lib/gill/model/changed-attribute-map.class");

var _changedAttributeMap2 = _interopRequireDefault(_changedAttributeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillChangedAttributeMapFactory = function () {
    function StandardGillChangedAttributeMapFactory() {
        _classCallCheck(this, StandardGillChangedAttributeMapFactory);
    }

    _createClass(StandardGillChangedAttributeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _changedAttributeMap2.default();
        }
    }]);

    return StandardGillChangedAttributeMapFactory;
}();

exports.default = StandardGillChangedAttributeMapFactory;
},{"lib/gill/model/changed-attribute-map.class":54}],56:[function(require,module,exports){
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
        value: function construct(changedAttributes, indices, uniformValues, vertices) {
            return new _model2.default(changedAttributes, indices, uniformValues, vertices);
        }
    }]);

    return StandardGillModelFactory;
}();

exports.default = StandardGillModelFactory;
},{"lib/gill/model.class":51}],57:[function(require,module,exports){
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
            //TODO Should this be immutable?
            return this.indices;
        }
    }]);

    return StandardGillIndexCollection;
}();

exports.default = StandardGillIndexCollection;
},{}],58:[function(require,module,exports){
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
},{"lib/gill/model/index-collection.class":57}],59:[function(require,module,exports){
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
},{}],60:[function(require,module,exports){
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
},{"lib/gill/model/number.class":59}],61:[function(require,module,exports){
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
},{}],62:[function(require,module,exports){
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
},{"lib/gill/model/uniform-value-map.class":61}],63:[function(require,module,exports){
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
},{}],64:[function(require,module,exports){
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
},{"lib/gill/model/vector2.class":63}],65:[function(require,module,exports){
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
},{}],66:[function(require,module,exports){
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
},{"lib/gill/model/vector3.class":65}],67:[function(require,module,exports){
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
},{}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVertexCollection = function () {
    function StandardGillVertexCollection() {
        _classCallCheck(this, StandardGillVertexCollection);

        this.vertices = new Array();
    }

    _createClass(StandardGillVertexCollection, [{
        key: "addVertex",
        value: function addVertex(vertex) {
            this.vertices.push(vertex);
        }
    }, {
        key: "eachVertex",
        value: function eachVertex(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var vertex = _step.value;

                    action(vertex);
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

    return StandardGillVertexCollection;
}();

exports.default = StandardGillVertexCollection;
},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/gill/model/vertex/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVertexCollectionFactory = function () {
    function StandardGillVertexCollectionFactory() {
        _classCallCheck(this, StandardGillVertexCollectionFactory);
    }

    _createClass(StandardGillVertexCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardGillVertexCollectionFactory;
}();

exports.default = StandardGillVertexCollectionFactory;
},{"lib/gill/model/vertex/collection.class":68}],70:[function(require,module,exports){
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
},{"lib/gill/model/vertex.class":67}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgram = function () {
    function StandardGillProgram(webglRenderingContext, webglProgram, attributes, uniforms) {
        _classCallCheck(this, StandardGillProgram);

        this.webglRenderingContext = webglRenderingContext;
        this.webglProgram = webglProgram;
        this.attributes = attributes;
        this.uniforms = uniforms;
    }

    _createClass(StandardGillProgram, [{
        key: "forEachAttribute",
        value: function forEachAttribute(action) {
            this.attributes.forEachAttribute(action);
        }
    }, {
        key: "forEachUniform",
        value: function forEachUniform(action) {
            this.uniforms.forEachUniform(action);
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
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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
},{"lib/gill/program/cache.class":72}],74:[function(require,module,exports){
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
},{}],75:[function(require,module,exports){
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
},{"lib/gill/program/context-source-map.class":74}],76:[function(require,module,exports){
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
        value: function construct(webglRenderingContext, webglProgram, attributes, uniforms) {
            return new _program2.default(webglRenderingContext, webglProgram, attributes, uniforms);
        }
    }]);

    return StandardGillProgramFactory;
}();

exports.default = StandardGillProgramFactory;
},{"lib/gill/program.class":71}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramService = function () {
    function StandardGillProgramService(gillProgramCache, gillProgramFactory, gillWebglService) {
        _classCallCheck(this, StandardGillProgramService);

        this.gillProgramCache = gillProgramCache;
        this.gillProgramFactory = gillProgramFactory;
        this.gillWebglService = gillWebglService;
    }

    _createClass(StandardGillProgramService, [{
        key: "getProgram",
        value: function getProgram(webglRenderingContext, gillProgramSource) {
            var programExists = this.gillProgramCache.hasProgram(webglRenderingContext, gillProgramSource);
            var program = void 0;
            if (programExists) {
                program = this.gillProgramCache.getProgram(webglRenderingContext, gillProgramSource);
            } else {
                var webglProgram = this.gillWebglService.getWebglProgram(webglRenderingContext, gillProgramSource.getVertexShaderSource(), gillProgramSource.getFragmentShaderSource());
                //TODO Move to gillWebglService.getAttributes(program, context)
                var attributeCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_ATTRIBUTES);
                var attributes = this.gillWebglService.constructAttributeCollection();
                for (var index = 0; index < attributeCount; index += 1) {
                    attributes.addAttribute(this.gillWebglService.getAttribute(webglRenderingContext, webglProgram, index));
                }
                //TODO Move to gillWebglService.getUniforms(program, context)
                var uniformCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_UNIFORMS);
                var uniforms = this.gillWebglService.constructUniformCollection();
                for (var _index = 0; _index < uniformCount; _index += 1) {
                    uniforms.addUniform(this.gillWebglService.getUniform(webglRenderingContext, webglProgram, _index));
                }
                program = this.gillProgramFactory.construct(webglRenderingContext, webglProgram, attributes, uniforms);
                this.gillProgramCache.cacheProgram(webglRenderingContext, gillProgramSource, program);
            }
            return program;
        }
    }]);

    return StandardGillProgramService;
}();

exports.default = StandardGillProgramService;
},{}],78:[function(require,module,exports){
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
        value: function construct(gillProgramCache, gillProgramFactory, gillWebglService) {
            return new _service2.default(gillProgramCache, gillProgramFactory, gillWebglService);
        }
    }]);

    return StandardGillProgramServiceFactory;
}();

exports.default = StandardGillProgramServiceFactory;
},{"lib/gill/program/service.class":77}],79:[function(require,module,exports){
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
},{}],80:[function(require,module,exports){
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
},{"lib/gill/program/source-program-map.class":79}],81:[function(require,module,exports){
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
},{}],82:[function(require,module,exports){
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
},{"lib/gill/program/source.class":81}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttribute = function () {
    function StandardGillAttribute(name, type, location) {
        _classCallCheck(this, StandardGillAttribute);

        this.name = name;
        this.type = type;
        this.location = location;
    }

    _createClass(StandardGillAttribute, [{
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
        key: "toTypedArray",
        value: function toTypedArray(webglVariableData) {
            return this.type.getTypedArrayFactory().construct(webglVariableData);
        }
    }]);

    return StandardGillAttribute;
}();

exports.default = StandardGillAttribute;
},{}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeCollection = function () {
    function StandardGillAttributeCollection() {
        _classCallCheck(this, StandardGillAttributeCollection);

        this.attributes = new Array();
    }

    _createClass(StandardGillAttributeCollection, [{
        key: "addAttribute",
        value: function addAttribute(attribute) {
            this.attributes.push(attribute);
        }
    }, {
        key: "forEachAttribute",
        value: function forEachAttribute(action) {
            this.attributes.forEach(function (attribute) {
                action(attribute);
            });
        }
    }]);

    return StandardGillAttributeCollection;
}();

exports.default = StandardGillAttributeCollection;
},{}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/gill/webgl/attribute/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeCollectionFactory = function () {
    function StandardGillAttributeCollectionFactory() {
        _classCallCheck(this, StandardGillAttributeCollectionFactory);
    }

    _createClass(StandardGillAttributeCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardGillAttributeCollectionFactory;
}();

exports.default = StandardGillAttributeCollectionFactory;
},{"lib/gill/webgl/attribute/collection.class":84}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attribute = require("lib/gill/webgl/attribute.class");

var _attribute2 = _interopRequireDefault(_attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeFactory = function () {
    function StandardGillAttributeFactory() {
        _classCallCheck(this, StandardGillAttributeFactory);
    }

    _createClass(StandardGillAttributeFactory, [{
        key: "construct",
        value: function construct(name, type, location) {
            return new _attribute2.default(name, type, location);
        }
    }]);

    return StandardGillAttributeFactory;
}();

exports.default = StandardGillAttributeFactory;
},{"lib/gill/webgl/attribute.class":83}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeType = function () {
    function StandardGillAttributeType(dataType, //TODO Constrain to WebGL type constant values?
    typedArrayFactory, dataSize) {
        _classCallCheck(this, StandardGillAttributeType);

        this.dataType = dataType;
        this.typedArrayFactory = typedArrayFactory;
        this.dataSize = dataSize;
    }

    _createClass(StandardGillAttributeType, [{
        key: "getDataSize",
        value: function getDataSize() {
            return this.dataSize;
        }
    }, {
        key: "getDataType",
        value: function getDataType() {
            return this.dataType;
        }
    }, {
        key: "getTypedArrayFactory",
        value: function getTypedArrayFactory() {
            return this.typedArrayFactory;
        }
    }]);

    return StandardGillAttributeType;
}();

exports.default = StandardGillAttributeType;
},{}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require("lib/gill/webgl/attribute/type.class");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeTypeFactory = function () {
    function StandardGillAttributeTypeFactory() {
        _classCallCheck(this, StandardGillAttributeTypeFactory);
    }

    _createClass(StandardGillAttributeTypeFactory, [{
        key: "construct",
        value: function construct(attributeType, typedArrayFactory, dataSize) {
            return new _type2.default(attributeType, typedArrayFactory, dataSize);
        }
    }]);

    return StandardGillAttributeTypeFactory;
}();

exports.default = StandardGillAttributeTypeFactory;
},{"lib/gill/webgl/attribute/type.class":87}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO Avoid files simply named "map"
var StandardGillAttributeTypeMap = function () {
    function StandardGillAttributeTypeMap() {
        _classCallCheck(this, StandardGillAttributeTypeMap);

        this.attributeType = new Map();
    }

    _createClass(StandardGillAttributeTypeMap, [{
        key: "getAttributeType",
        value: function getAttributeType(webglType //TODO Constrain to WebGLActiveInfo.type values, whatever those are
        ) {
            return this.attributeType.get(webglType);
        }
    }, {
        key: "hasAttributeType",
        value: function hasAttributeType(webglType) {
            return this.attributeType.has(webglType);
        }
    }, {
        key: "setAttributeType",
        value: function setAttributeType(webglType, gillAttributeType) {
            this.attributeType.set(webglType, gillAttributeType);
        }
    }]);

    return StandardGillAttributeTypeMap;
}();

exports.default = StandardGillAttributeTypeMap;
},{}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = require("lib/gill/webgl/attribute/type/map.class");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeTypeMapFactory = function () {
    function StandardGillAttributeTypeMapFactory() {
        _classCallCheck(this, StandardGillAttributeTypeMapFactory);
    }

    _createClass(StandardGillAttributeTypeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _map2.default();
        }
    }]);

    return StandardGillAttributeTypeMapFactory;
}();

exports.default = StandardGillAttributeTypeMapFactory;
},{"lib/gill/webgl/attribute/type/map.class":89}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglProgramFactory = function () {
    function StandardGillWebglProgramFactory(webglShaderFactory) {
        _classCallCheck(this, StandardGillWebglProgramFactory);

        this.webglShaderFactory = webglShaderFactory;
    }

    _createClass(StandardGillWebglProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            var webglProgram = webglRenderingContext.createProgram();
            var fragmentShader = this.webglShaderFactory.construct(fragmentShaderSource, webglRenderingContext.FRAGMENT_SHADER, webglRenderingContext),
                vertexShader = this.webglShaderFactory.construct(vertexShaderSource, webglRenderingContext.VERTEX_SHADER, webglRenderingContext);
            webglRenderingContext.attachShader(webglProgram, vertexShader);
            webglRenderingContext.attachShader(webglProgram, fragmentShader);
            webglRenderingContext.linkProgram(webglProgram);
            if (!webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS)) {
                throw "Unable to initialize the WebGL program: " + webglRenderingContext.getProgramInfoLog(webglProgram);
            }
            return webglProgram;
        }
    }]);

    return StandardGillWebglProgramFactory;
}();

exports.default = StandardGillWebglProgramFactory;
},{}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglService = function () {
    function StandardGillWebglService(webglProgramFactory, webglAttributeCollectionFactory, webglAttributeFactory, webglAttributeTypeFactory, webglAttributeTypeMap, webglUniformCollectionFactory, webglUniformFactory, webglUniformTypeFactory, webglUniformTypeMap) {
        _classCallCheck(this, StandardGillWebglService);

        this.webglProgramFactory = webglProgramFactory;
        this.webglAttributeCollectionFactory = webglAttributeCollectionFactory;
        this.webglAttributeFactory = webglAttributeFactory;
        this.webglAttributeTypeFactory = webglAttributeTypeFactory;
        this.webglAttributeTypeMap = webglAttributeTypeMap;
        this.webglUniformCollectionFactory = webglUniformCollectionFactory;
        this.webglUniformFactory = webglUniformFactory;
        this.webglUniformTypeFactory = webglUniformTypeFactory;
        this.webglUniformTypeMap = webglUniformTypeMap;
    }

    _createClass(StandardGillWebglService, [{
        key: "constructAttributeCollection",
        value: function constructAttributeCollection() {
            return this.webglAttributeCollectionFactory.construct();
        }
    }, {
        key: "constructUniformCollection",
        value: function constructUniformCollection() {
            return this.webglUniformCollectionFactory.construct();
        }
    }, {
        key: "getAttribute",
        value: function getAttribute(webglRenderingContext, webglProgram, attributeIndex) {
            //TODO Cache?
            var attributeInfo = webglRenderingContext.getActiveAttrib(webglProgram, attributeIndex);
            var attributeTypeExists = this.webglAttributeTypeMap.hasAttributeType(attributeInfo.type);
            if (!attributeTypeExists) {
                throw new Error("Unknown WebGL variable type '" + attributeInfo.type + "' ('" + attributeInfo.name + "')");
            }
            var attributeLocation = webglRenderingContext.getAttribLocation(webglProgram, attributeInfo.name);
            webglRenderingContext.enableVertexAttribArray(attributeLocation);
            //TODO This may need to account for webglActiveInfo.size, but I have not found a use for that yet
            return this.webglAttributeFactory.construct(attributeInfo.name, this.webglAttributeTypeMap.getAttributeType(attributeInfo.type), attributeLocation);
        }
    }, {
        key: "getUniform",
        value: function getUniform(webglRenderingContext, webglProgram, uniformIndex) {
            //TODO Cache?
            var uniformInfo = webglRenderingContext.getActiveUniform(webglProgram, uniformIndex);
            var uniformTypeExists = this.webglUniformTypeMap.hasUniformType(uniformInfo.type);
            if (!uniformTypeExists) {
                throw new Error("Unknown WebGL variable type '" + uniformInfo.type + "' ('" + uniformInfo.name + "')");
            }
            var uniformLocation = webglRenderingContext.getUniformLocation(webglProgram, uniformInfo.name);
            //TODO This may need to account for webglActiveInfo.size, but I have not found a use for that yet
            return this.webglUniformFactory.construct(uniformInfo.name, this.webglUniformTypeMap.getUniformType(uniformInfo.type), uniformLocation);
        }
    }, {
        key: "getWebglProgram",
        value: function getWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            //TODO Program cache
            return this.webglProgramFactory.construct(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "setAttributeType",
        value: function setAttributeType(webglType, //TODO Constrain to WebGLActiveInfo.type values, whatever those are
        dataType, //TODO Constrain to WebGL type constants
        typedArrayFactory, dataSize) {
            // TODO Should this blindly overwrite like this?
            this.webglAttributeTypeMap.setAttributeType(webglType, this.webglAttributeTypeFactory.construct(dataType, typedArrayFactory, dataSize));
        }
    }, {
        key: "setUniformType",
        value: function setUniformType(webglType, //TODO Constrain to WebGLActiveInfo.type values, whatever those are
        dataType, //TODO Constrain to uniform strings? (e.g. "i" | "f")
        dataSize) {
            // TODO Should this blindly overwrite like this?
            this.webglUniformTypeMap.setUniformType(webglType, this.webglUniformTypeFactory.construct(dataType, dataSize));
        }
    }]);

    return StandardGillWebglService;
}();

exports.default = StandardGillWebglService;
},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/webgl/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglServiceFactory = function () {
    function StandardGillWebglServiceFactory() {
        _classCallCheck(this, StandardGillWebglServiceFactory);
    }

    _createClass(StandardGillWebglServiceFactory, [{
        key: "construct",
        value: function construct(webglProgramFactory, webglAttributeCollectionFactory, webglAttributeFactory, webglAttributeTypeFactory, webglAttributeTypeMap, webglUniformCollectionFactory, webglUniformFactory, webglUniformTypeFactory, webglUniformTypeMap) {
            return new _service2.default(webglProgramFactory, webglAttributeCollectionFactory, webglAttributeFactory, webglAttributeTypeFactory, webglAttributeTypeMap, webglUniformCollectionFactory, webglUniformFactory, webglUniformTypeFactory, webglUniformTypeMap);
        }
    }]);

    return StandardGillWebglServiceFactory;
}();

exports.default = StandardGillWebglServiceFactory;
},{"lib/gill/webgl/service.class":92}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglShaderFactory = function () {
    function StandardGillWebglShaderFactory() {
        _classCallCheck(this, StandardGillWebglShaderFactory);
    }

    _createClass(StandardGillWebglShaderFactory, [{
        key: "construct",
        value: function construct(shaderSource, shaderType, webglRenderingContext) {
            var shader = webglRenderingContext.createShader(shaderType);
            webglRenderingContext.shaderSource(shader, shaderSource);
            webglRenderingContext.compileShader(shader);
            if (!webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS)) {
                var log = webglRenderingContext.getShaderInfoLog(shader),
                    shaderName = shaderType == webglRenderingContext.FRAGMENT_SHADER ? "fragment" : "vertex";
                webglRenderingContext.deleteShader(shader);
                throw "An error occurred compiling the " + shaderName + " shader: " + log;
            }
            return shader;
        }
    }]);

    return StandardGillWebglShaderFactory;
}();

exports.default = StandardGillWebglShaderFactory;
},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Float32ArrayFactory = function () {
    function Float32ArrayFactory() {
        _classCallCheck(this, Float32ArrayFactory);
    }

    _createClass(Float32ArrayFactory, [{
        key: "construct",
        value: function construct(arrayData) {
            return Float32Array.from(arrayData);
        }
    }]);

    return Float32ArrayFactory;
}();

exports.default = Float32ArrayFactory;
},{}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniform = function () {
    function StandardGillUniform(name, type, location) {
        _classCallCheck(this, StandardGillUniform);

        this.name = name;
        this.type = type;
        this.location = location;
    }

    _createClass(StandardGillUniform, [{
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

    return StandardGillUniform;
}();

exports.default = StandardGillUniform;
},{}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformCollection = function () {
    function StandardGillUniformCollection() {
        _classCallCheck(this, StandardGillUniformCollection);

        this.uniforms = new Array();
    }

    _createClass(StandardGillUniformCollection, [{
        key: "addUniform",
        value: function addUniform(uniform) {
            this.uniforms.push(uniform);
        }
    }, {
        key: "forEachUniform",
        value: function forEachUniform(action) {
            this.uniforms.forEach(function (uniform) {
                action(uniform);
            });
        }
    }]);

    return StandardGillUniformCollection;
}();

exports.default = StandardGillUniformCollection;
},{}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require("lib/gill/webgl/uniform/collection.class");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformCollectionFactory = function () {
    function StandardGillUniformCollectionFactory() {
        _classCallCheck(this, StandardGillUniformCollectionFactory);
    }

    _createClass(StandardGillUniformCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new _collection2.default();
        }
    }]);

    return StandardGillUniformCollectionFactory;
}();

exports.default = StandardGillUniformCollectionFactory;
},{"lib/gill/webgl/uniform/collection.class":97}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniform = require("lib/gill/webgl/uniform.class");

var _uniform2 = _interopRequireDefault(_uniform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformFactory = function () {
    function StandardGillUniformFactory() {
        _classCallCheck(this, StandardGillUniformFactory);
    }

    _createClass(StandardGillUniformFactory, [{
        key: "construct",
        value: function construct(name, type, location) {
            return new _uniform2.default(name, type, location);
        }
    }]);

    return StandardGillUniformFactory;
}();

exports.default = StandardGillUniformFactory;
},{"lib/gill/webgl/uniform.class":96}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformType = function () {
    function StandardGillUniformType(dataType, dataSize) {
        _classCallCheck(this, StandardGillUniformType);

        this.dataType = dataType;
        this.dataSize = dataSize;
    }

    _createClass(StandardGillUniformType, [{
        key: "getDataSize",
        value: function getDataSize() {
            return this.dataSize;
        }
    }, {
        key: "getDataType",
        value: function getDataType() {
            return this.dataType;
        }
    }]);

    return StandardGillUniformType;
}();

exports.default = StandardGillUniformType;
},{}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require("lib/gill/webgl/uniform/type.class");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformTypeFactory = function () {
    function StandardGillUniformTypeFactory() {
        _classCallCheck(this, StandardGillUniformTypeFactory);
    }

    _createClass(StandardGillUniformTypeFactory, [{
        key: "construct",
        value: function construct(dataType, dataSize) {
            return new _type2.default(dataType, dataSize);
        }
    }]);

    return StandardGillUniformTypeFactory;
}();

exports.default = StandardGillUniformTypeFactory;
},{"lib/gill/webgl/uniform/type.class":100}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformTypeMap = function () {
    function StandardGillUniformTypeMap() {
        _classCallCheck(this, StandardGillUniformTypeMap);

        this.uniformType = new Map();
    }

    _createClass(StandardGillUniformTypeMap, [{
        key: "getUniformType",
        value: function getUniformType(webglType //TODO Constrain to WebGLActiveInfo.type values, whatever those are
        ) {
            return this.uniformType.get(webglType);
        }
    }, {
        key: "hasUniformType",
        value: function hasUniformType(webglType) {
            return this.uniformType.has(webglType);
        }
    }, {
        key: "setUniformType",
        value: function setUniformType(webglType, gillUniformType) {
            this.uniformType.set(webglType, gillUniformType);
        }
    }]);

    return StandardGillUniformTypeMap;
}();

exports.default = StandardGillUniformTypeMap;
},{}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = require("lib/gill/webgl/uniform/type/map.class");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformTypeMapFactory = function () {
    function StandardGillUniformTypeMapFactory() {
        _classCallCheck(this, StandardGillUniformTypeMapFactory);
    }

    _createClass(StandardGillUniformTypeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _map2.default();
        }
    }]);

    return StandardGillUniformTypeMapFactory;
}();

exports.default = StandardGillUniformTypeMapFactory;
},{"lib/gill/webgl/uniform/type/map.class":102}]},{},[25]);
