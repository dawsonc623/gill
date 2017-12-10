'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var StandardGillModelAttributeDataCacheFactory = function () {
    function StandardGillModelAttributeDataCacheFactory() {
        _classCallCheck(this, StandardGillModelAttributeDataCacheFactory);
    }

    _createClass(StandardGillModelAttributeDataCacheFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillModelAttributeDataCache();
        }
    }]);

    return StandardGillModelAttributeDataCacheFactory;
}();

var gillModelAttributeDataCacheFactory = new StandardGillModelAttributeDataCacheFactory();

var gillModelAttributeDataCache = gillModelAttributeDataCacheFactory.construct();

var StandardAttributeData = function () {
    function StandardAttributeData(data, hasChanged, normalized, offset, stride) {
        _classCallCheck(this, StandardAttributeData);

        this.data = data;
        this.hasChanged = hasChanged;
        this.normalized = normalized;
        this.offset = offset;
        this.stride = stride;
    }

    _createClass(StandardAttributeData, [{
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
    }, {
        key: "setValueAt",
        value: function setValueAt(index, attributeValue) {
            var _data;

            var newData = new Array();
            attributeValue.addToAttributeData(newData);
            (_data = this.data).splice.apply(_data, [index * newData.length, //TODO Is this reliable? Should data know the size of each "unit"? Probably
            newData.length].concat(newData));
            this.hasChanged = true;
        }
    }]);

    return StandardAttributeData;
}();

var StandardGillModelAttributeDataFactory = function () {
    function StandardGillModelAttributeDataFactory() {
        _classCallCheck(this, StandardGillModelAttributeDataFactory);
    }

    _createClass(StandardGillModelAttributeDataFactory, [{
        key: "construct",
        value: function construct(data, hasChanged, normalized, offset, stride) {
            return new StandardAttributeData(data, hasChanged, normalized, offset, stride);
        }
    }]);

    return StandardGillModelAttributeDataFactory;
}();

var gillModelAttributeDataFactory = new StandardGillModelAttributeDataFactory();

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
                0, // The starting index for the first attribute value
                0 // The span between the start of each attribute value
                );
                this.gillModelAttributeDataCache.setAttributeData(model, attributeName, attributeData);
            }
            return attributeData;
        }
    }, {
        key: "setValueAt",
        value: function setValueAt(model, attributeName, index, attributeValue) {
            var attributeData = this.getAttributeData(model, attributeName);
            attributeData.setValueAt(index, attributeValue);
        }
    }]);

    return StandardGillModelAttributeDataRepository;
}();

var StandardGillModelAttributeDataRepositoryFactory = function () {
    function StandardGillModelAttributeDataRepositoryFactory() {
        _classCallCheck(this, StandardGillModelAttributeDataRepositoryFactory);
    }

    _createClass(StandardGillModelAttributeDataRepositoryFactory, [{
        key: "construct",
        value: function construct(gillModelAttributeDataCache, gillModelAttributeDataFactory) {
            return new StandardGillModelAttributeDataRepository(gillModelAttributeDataCache, gillModelAttributeDataFactory);
        }
    }]);

    return StandardGillModelAttributeDataRepositoryFactory;
}();

var gillModelAttributeDataRepositoryFactory = new StandardGillModelAttributeDataRepositoryFactory();

var gillModelAttributeDataRepository = gillModelAttributeDataRepositoryFactory.construct(gillModelAttributeDataCache, gillModelAttributeDataFactory);

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

var StandardGillAttributeValueMapFactory = function () {
    function StandardGillAttributeValueMapFactory() {
        _classCallCheck(this, StandardGillAttributeValueMapFactory);
    }

    _createClass(StandardGillAttributeValueMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillAttributeValueMap();
        }
    }]);

    return StandardGillAttributeValueMapFactory;
}();

var gillAttributeValueMapFactory = new StandardGillAttributeValueMapFactory();

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

var StandardGillIndexCollectionFactory = function () {
    function StandardGillIndexCollectionFactory() {
        _classCallCheck(this, StandardGillIndexCollectionFactory);
    }

    _createClass(StandardGillIndexCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillIndexCollection();
        }
    }]);

    return StandardGillIndexCollectionFactory;
}();

var gillIndexCollectionFactory = new StandardGillIndexCollectionFactory();

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

var StandardGillModelBufferServiceFactory = function () {
    function StandardGillModelBufferServiceFactory() {
        _classCallCheck(this, StandardGillModelBufferServiceFactory);
    }

    _createClass(StandardGillModelBufferServiceFactory, [{
        key: "construct",
        value: function construct(gillBufferService) {
            return new StandardGillModelBufferService(gillBufferService);
        }
    }]);

    return StandardGillModelBufferServiceFactory;
}();

var gillModelBufferServiceFactory = new StandardGillModelBufferServiceFactory();

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

var StandardGillBufferServiceFactory = function () {
    function StandardGillBufferServiceFactory() {
        _classCallCheck(this, StandardGillBufferServiceFactory);
    }

    _createClass(StandardGillBufferServiceFactory, [{
        key: "construct",
        value: function construct(gillAttributeBufferMapFactory, gillBufferCache, gillBufferFactory) {
            return new StandardGillBufferService(gillAttributeBufferMapFactory, gillBufferCache, gillBufferFactory);
        }
    }]);

    return StandardGillBufferServiceFactory;
}();

var gillBufferServiceFactory = new StandardGillBufferServiceFactory();

var StandardGillAttribufeBufferMap = function () {
    function StandardGillAttribufeBufferMap() {
        _classCallCheck(this, StandardGillAttribufeBufferMap);

        this.buffers = new Map();
    }

    _createClass(StandardGillAttribufeBufferMap, [{
        key: "eachAttributeBuffer",
        value: function eachAttributeBuffer(action) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.buffers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        attributeName = _step2$value[0],
                        webglBuffer = _step2$value[1];

                    action(attributeName, webglBuffer);
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

var StandardGillAttributeBufferMapFactory = function () {
    function StandardGillAttributeBufferMapFactory() {
        _classCallCheck(this, StandardGillAttributeBufferMapFactory);
    }

    _createClass(StandardGillAttributeBufferMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillAttribufeBufferMap();
        }
    }]);

    return StandardGillAttributeBufferMapFactory;
}();

var gillAttributeBufferMapFactory = new StandardGillAttributeBufferMapFactory();

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

var StandardGillBufferCacheFactory = function () {
    function StandardGillBufferCacheFactory() {
        _classCallCheck(this, StandardGillBufferCacheFactory);
    }

    _createClass(StandardGillBufferCacheFactory, [{
        key: "construct",
        value: function construct(gillContextModels, gillModelBufferMapFactory) {
            return new StandardGillBufferCache(gillContextModels, gillModelBufferMapFactory);
        }
    }]);

    return StandardGillBufferCacheFactory;
}();

var gillBufferCacheFactory = new StandardGillBufferCacheFactory();

var StandardGillContextModelsMap = function () {
    function StandardGillContextModelsMap() {
        _classCallCheck(this, StandardGillContextModelsMap);

        this.gillModelBuffers = new Map();
    }

    _createClass(StandardGillContextModelsMap, [{
        key: "eachModelBuffers",
        value: function eachModelBuffers(action) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.gillModelBuffers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _step3$value = _slicedToArray(_step3.value, 2),
                        webglRenderingContext = _step3$value[0],
                        gillModelBuffers = _step3$value[1];

                    action(webglRenderingContext, gillModelBuffers);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
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

var StandardGillContextModelsMapFactory = function () {
    function StandardGillContextModelsMapFactory() {
        _classCallCheck(this, StandardGillContextModelsMapFactory);
    }

    _createClass(StandardGillContextModelsMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillContextModelsMap();
        }
    }]);

    return StandardGillContextModelsMapFactory;
}();

var gillContextModelsMapFactory = new StandardGillContextModelsMapFactory();

var StandardGillModelBufferMap = function () {
    function StandardGillModelBufferMap() {
        _classCallCheck(this, StandardGillModelBufferMap);

        this.gillModelBuffers = new Map();
    }

    _createClass(StandardGillModelBufferMap, [{
        key: "eachBuffer",
        value: function eachBuffer(action) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.gillModelBuffers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _step4$value = _slicedToArray(_step4.value, 2),
                        gillModel = _step4$value[0],
                        gillBuffer = _step4$value[1];

                    action(gillModel, gillBuffer);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
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

var StandardGillModelBufferMapFactory = function () {
    function StandardGillModelBufferMapFactory() {
        _classCallCheck(this, StandardGillModelBufferMapFactory);
    }

    _createClass(StandardGillModelBufferMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillModelBufferMap();
        }
    }]);

    return StandardGillModelBufferMapFactory;
}();

var gillModelBufferMapFactory = new StandardGillModelBufferMapFactory();

var gillBufferCache = gillBufferCacheFactory.construct(gillContextModelsMapFactory.construct(), gillModelBufferMapFactory);

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

var StandardGillBufferFactory = function () {
    function StandardGillBufferFactory() {
        _classCallCheck(this, StandardGillBufferFactory);
    }

    _createClass(StandardGillBufferFactory, [{
        key: "construct",
        value: function construct(gillAttributeBuffers, webglIndexBuffer) {
            return new StandardGillBuffer(gillAttributeBuffers, webglIndexBuffer);
        }
    }]);

    return StandardGillBufferFactory;
}();

var gillBufferFactory = new StandardGillBufferFactory();

var gillBufferService = gillBufferServiceFactory.construct(gillAttributeBufferMapFactory, gillBufferCache, gillBufferFactory);

var gillModelBufferService = gillModelBufferServiceFactory.construct(gillBufferService);

var StandardModel = function () {
    function StandardModel(attributeDataRepository, indices, textureDataRepository, uniformValues) {
        _classCallCheck(this, StandardModel);

        this.attributeDataRepository = attributeDataRepository;
        this.indices = indices;
        this.textureDataRepository = textureDataRepository;
        this.uniformValues = uniformValues;
        this.indicesChanged = false;
    }

    _createClass(StandardModel, [{
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
    }, {
        key: "setVertex",
        value: function setVertex(index, vertex) {
            var _this2 = this;

            vertex.eachAttribute(function (attributeName, attributeValue) {
                _this2.attributeDataRepository.setValueAt(_this2, attributeName, index, attributeValue);
            });
            return this;
        }
    }]);

    return StandardModel;
}();

var StandardGillModelFactory = function () {
    function StandardGillModelFactory() {
        _classCallCheck(this, StandardGillModelFactory);
    }

    _createClass(StandardGillModelFactory, [{
        key: "construct",
        value: function construct(gillModelAttributeDataRepository, indices, textureDataRepository, uniformValues) {
            return new StandardModel(gillModelAttributeDataRepository, indices, textureDataRepository, uniformValues);
        }
    }]);

    return StandardGillModelFactory;
}();

var gillModelFactory = new StandardGillModelFactory();

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

var StandardGillNumberFactory = function () {
    function StandardGillNumberFactory() {
        _classCallCheck(this, StandardGillNumberFactory);
    }

    _createClass(StandardGillNumberFactory, [{
        key: "construct",
        value: function construct(value) {
            return new StandardGillNumber(value);
        }
    }]);

    return StandardGillNumberFactory;
}();

var gillNumberFactory = new StandardGillNumberFactory();

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

var StandardGillProgramSourceFactory = function () {
    function StandardGillProgramSourceFactory() {
        _classCallCheck(this, StandardGillProgramSourceFactory);
    }

    _createClass(StandardGillProgramSourceFactory, [{
        key: "construct",
        value: function construct(vertexShaderShaderSource, fragmentShaderShaderSource) {
            return new StandardGillProgramSource(vertexShaderShaderSource, fragmentShaderShaderSource);
        }
    }]);

    return StandardGillProgramSourceFactory;
}();

var standardGillProgramSourceFactory = new StandardGillProgramSourceFactory();

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

var StandardModelTextureRepositoryFactory = function () {
    function StandardModelTextureRepositoryFactory() {
        _classCallCheck(this, StandardModelTextureRepositoryFactory);
    }

    _createClass(StandardModelTextureRepositoryFactory, [{
        key: "construct",
        value: function construct(webglService) {
            return new StandardModelTextureRepository(webglService);
        }
    }]);

    return StandardModelTextureRepositoryFactory;
}();

var modelTextureRepositoryFactory = new StandardModelTextureRepositoryFactory();

var StandardWebglBufferRenderingContextMap = function () {
    function StandardWebglBufferRenderingContextMap() {
        _classCallCheck(this, StandardWebglBufferRenderingContextMap);

        this.webglRenderingContexts = new Map();
    }

    _createClass(StandardWebglBufferRenderingContextMap, [{
        key: "eachWebglRenderingContext",
        value: function eachWebglRenderingContext(action) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.webglRenderingContexts[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _step5$value = _slicedToArray(_step5.value, 2),
                        webglBuffer = _step5$value[0],
                        webglRenderingContext = _step5$value[1];

                    action(webglBuffer, webglRenderingContext);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
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

var StandardWebglBufferRenderingContextMapFactory = function () {
    function StandardWebglBufferRenderingContextMapFactory() {
        _classCallCheck(this, StandardWebglBufferRenderingContextMapFactory);
    }

    _createClass(StandardWebglBufferRenderingContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardWebglBufferRenderingContextMap();
        }
    }]);

    return StandardWebglBufferRenderingContextMapFactory;
}();

var webglBufferRenderingContextMapFactory = new StandardWebglBufferRenderingContextMapFactory();

var webglBufferRenderingContextMap = webglBufferRenderingContextMapFactory.construct();

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

var webglProgramFactory = new StandardWebglProgramFactory();

var StandardWebglProgramRenderingContextMap = function () {
    function StandardWebglProgramRenderingContextMap() {
        _classCallCheck(this, StandardWebglProgramRenderingContextMap);

        this.webglRenderingContexts = new Map();
    }

    _createClass(StandardWebglProgramRenderingContextMap, [{
        key: "eachWebglRenderingContext",
        value: function eachWebglRenderingContext(action) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.webglRenderingContexts[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _step6$value = _slicedToArray(_step6.value, 2),
                        webglProgram = _step6$value[0],
                        webglRenderingContext = _step6$value[1];

                    action(webglProgram, webglRenderingContext);
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
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

var StandardWebglProgramRenderingContextMapFactory = function () {
    function StandardWebglProgramRenderingContextMapFactory() {
        _classCallCheck(this, StandardWebglProgramRenderingContextMapFactory);
    }

    _createClass(StandardWebglProgramRenderingContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardWebglProgramRenderingContextMap();
        }
    }]);

    return StandardWebglProgramRenderingContextMapFactory;
}();

var webglProgramRenderingContextMapFactory = new StandardWebglProgramRenderingContextMapFactory();

var webglProgramRenderingContextMap = webglProgramRenderingContextMapFactory.construct();

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

var StandardGillWebglRenderingContextRepositoryFactory = function () {
    function StandardGillWebglRenderingContextRepositoryFactory() {
        _classCallCheck(this, StandardGillWebglRenderingContextRepositoryFactory);
    }

    _createClass(StandardGillWebglRenderingContextRepositoryFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardWebglRenderingContextRepository();
        }
    }]);

    return StandardGillWebglRenderingContextRepositoryFactory;
}();

var webglRenderingContextRepositoryFactory = new StandardGillWebglRenderingContextRepositoryFactory();

var webglRenderingContextRepository = webglRenderingContextRepositoryFactory.construct();

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

var StandardWebglServiceFactory = function () {
    function StandardWebglServiceFactory() {
        _classCallCheck(this, StandardWebglServiceFactory);
    }

    _createClass(StandardWebglServiceFactory, [{
        key: "construct",
        value: function construct(webglBufferRenderingContexts, webglProgramFactory, webglProgramRenderingContexts, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContexts) {
            return new StandardWebglService(webglBufferRenderingContexts, webglProgramFactory, webglProgramRenderingContexts, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContexts);
        }
    }]);

    return StandardWebglServiceFactory;
}();

var webglServiceFactory = new StandardWebglServiceFactory();

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

var webglShaderFactory = new StandardWebglShaderFactory();

var StandardWebglTextureRenderingContextMap = function () {
    function StandardWebglTextureRenderingContextMap() {
        _classCallCheck(this, StandardWebglTextureRenderingContextMap);

        this.webglRenderingContexts = new Map();
    }

    _createClass(StandardWebglTextureRenderingContextMap, [{
        key: "eachWebglRenderingContext",
        value: function eachWebglRenderingContext(action) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this.webglRenderingContexts[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _step7$value = _slicedToArray(_step7.value, 2),
                        webglTexture = _step7$value[0],
                        webglRenderingContext = _step7$value[1];

                    action(webglTexture, webglRenderingContext);
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    }, {
        key: "hasWebglRenderingContext",
        value: function hasWebglRenderingContext(webglTexture) {
            return this.webglRenderingContexts.has(webglTexture);
        }
    }, {
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext(webglTexture) {
            return this.webglRenderingContexts.get(webglTexture);
        }
    }, {
        key: "setWebglRenderingContext",
        value: function setWebglRenderingContext(webglTexture, webglRenderingContext) {
            this.webglRenderingContexts.set(webglTexture, webglRenderingContext);
        }
    }]);

    return StandardWebglTextureRenderingContextMap;
}();

var StandardWebglTextureRenderingContextMapFactory = function () {
    function StandardWebglTextureRenderingContextMapFactory() {
        _classCallCheck(this, StandardWebglTextureRenderingContextMapFactory);
    }

    _createClass(StandardWebglTextureRenderingContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardWebglTextureRenderingContextMap();
        }
    }]);

    return StandardWebglTextureRenderingContextMapFactory;
}();

var webglTextureRenderingContextMapFactory = new StandardWebglTextureRenderingContextMapFactory();

var webglTextureRenderingContextMap = webglTextureRenderingContextMapFactory.construct();

var webglService = webglServiceFactory.construct(webglBufferRenderingContextMap, webglProgramFactory, webglProgramRenderingContextMap, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContextMap);

var modelTextureRepository = modelTextureRepositoryFactory.construct(webglService);

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

var StandardAttributeCollectionFactory = function () {
    function StandardAttributeCollectionFactory() {
        _classCallCheck(this, StandardAttributeCollectionFactory);
    }

    _createClass(StandardAttributeCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardAttributeCollection();
        }
    }]);

    return StandardAttributeCollectionFactory;
}();

var gillWebglAttributeCollectionFactory = new StandardAttributeCollectionFactory();

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

var StandardAttributeFactory = function () {
    function StandardAttributeFactory() {
        _classCallCheck(this, StandardAttributeFactory);
    }

    _createClass(StandardAttributeFactory, [{
        key: "construct",
        value: function construct(name, type, location, usage) {
            return new StandardAttribute(name, type, location, usage);
        }
    }]);

    return StandardAttributeFactory;
}();

var gillWebglAttributeFactory = new StandardAttributeFactory();

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

var StandardGillContextSourceMapFactory = function () {
    function StandardGillContextSourceMapFactory() {
        _classCallCheck(this, StandardGillContextSourceMapFactory);
    }

    _createClass(StandardGillContextSourceMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillContextSourceMap();
        }
    }]);

    return StandardGillContextSourceMapFactory;
}();

var gillContextSourceMapFactory = new StandardGillContextSourceMapFactory();

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

var StandardGillProgramCacheFactory = function () {
    function StandardGillProgramCacheFactory() {
        _classCallCheck(this, StandardGillProgramCacheFactory);
    }

    _createClass(StandardGillProgramCacheFactory, [{
        key: "construct",
        value: function construct(gillProgramSources, gillProgramMapFactory) {
            return new StandardGillProgramCache(gillProgramSources, gillProgramMapFactory);
        }
    }]);

    return StandardGillProgramCacheFactory;
}();

var gillProgramCache$2 = new StandardGillProgramCacheFactory();

var StandardGillProgramMap = function () {
    function StandardGillProgramMap() {
        _classCallCheck(this, StandardGillProgramMap);

        this.programs = new Map();
    }

    _createClass(StandardGillProgramMap, [{
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

    return StandardGillProgramMap;
}();

var StandardGillProgramMapFactory = function () {
    function StandardGillProgramMapFactory() {
        _classCallCheck(this, StandardGillProgramMapFactory);
    }

    _createClass(StandardGillProgramMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillProgramMap();
        }
    }]);

    return StandardGillProgramMapFactory;
}();

var gillSourceProgramMapFactory = new StandardGillProgramMapFactory();

var gillProgramCache = gillProgramCache$2.construct(gillContextSourceMapFactory.construct(), gillSourceProgramMapFactory);

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

var StandardGillProgramFactory = function () {
    function StandardGillProgramFactory() {
        _classCallCheck(this, StandardGillProgramFactory);
    }

    _createClass(StandardGillProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, webglProgram, attributes, textures, uniforms) {
            return new StandardGillProgram(webglRenderingContext, webglProgram, attributes, textures, uniforms);
        }
    }]);

    return StandardGillProgramFactory;
}();

var gillProgramFactory = new StandardGillProgramFactory();

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
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = attributeInfo[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var attribute = _step8.value;

                        var location = webglRenderingContext.getAttribLocation(webglProgram, attribute.name);
                        webglRenderingContext.enableVertexAttribArray(location);
                        attributes.addAttribute(this.attributeFactory.construct(attribute.name, this.variableTypes.getWebglVariableType(attribute.type), location, webglRenderingContext.STATIC_DRAW));
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }

                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = uniformInfo[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var uniform = _step9.value;

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
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
                            _iterator9.return();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
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

var StandardGillProgramServiceFactory = function () {
    function StandardGillProgramServiceFactory() {
        _classCallCheck(this, StandardGillProgramServiceFactory);
    }

    _createClass(StandardGillProgramServiceFactory, [{
        key: "construct",
        value: function construct(attributeCollectionFactory, attributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglService, textureCollectionFactory, textureFactory, uniformCollectionFactory, uniformFactory, variableTypes) {
            return new StandardGillProgramService(attributeCollectionFactory, attributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglService, textureCollectionFactory, textureFactory, uniformCollectionFactory, uniformFactory, variableTypes);
        }
    }]);

    return StandardGillProgramServiceFactory;
}();

var gillProgramServiceFactory = new StandardGillProgramServiceFactory();

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

var StandardProgramWebglServiceAdapterFactory = function () {
    function StandardProgramWebglServiceAdapterFactory() {
        _classCallCheck(this, StandardProgramWebglServiceAdapterFactory);
    }

    _createClass(StandardProgramWebglServiceAdapterFactory, [{
        key: "construct",
        value: function construct(webglService) {
            return new ProgramWebglServiceAdapter(webglService);
        }
    }]);

    return StandardProgramWebglServiceAdapterFactory;
}();

var programWebglServiceAdapterFactory = new StandardProgramWebglServiceAdapterFactory();

var gillProgramWebglServiceAdapter = programWebglServiceAdapterFactory.construct(webglService);

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
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = this.textures[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var texture = _step10.value;

                    action(texture);
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }
        }
    }]);

    return StandardTextureCollection;
}();

var StandardTextureCollectionFactory = function () {
    function StandardTextureCollectionFactory() {
        _classCallCheck(this, StandardTextureCollectionFactory);
    }

    _createClass(StandardTextureCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardTextureCollection();
        }
    }]);

    return StandardTextureCollectionFactory;
}();

var textureCollectionFactory = new StandardTextureCollectionFactory();

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

var StandardTextureFactory = function () {
    function StandardTextureFactory() {
        _classCallCheck(this, StandardTextureFactory);
    }

    _createClass(StandardTextureFactory, [{
        key: "construct",
        value: function construct(bindTarget, imageTarget, location, name, type) {
            return new StandardTexture(bindTarget, imageTarget, location, name, type);
        }
    }]);

    return StandardTextureFactory;
}();

var textureFactory = new StandardTextureFactory();

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

var StandardUniformCollectionFactory = function () {
    function StandardUniformCollectionFactory() {
        _classCallCheck(this, StandardUniformCollectionFactory);
    }

    _createClass(StandardUniformCollectionFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardUniformCollection();
        }
    }]);

    return StandardUniformCollectionFactory;
}();

var gillWebglUniformCollectionFactory = new StandardUniformCollectionFactory();

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

var StandardUniformFactory = function () {
    function StandardUniformFactory() {
        _classCallCheck(this, StandardUniformFactory);
    }

    _createClass(StandardUniformFactory, [{
        key: "construct",
        value: function construct(name, type, location) {
            return new StandardUniform(name, type, location);
        }
    }]);

    return StandardUniformFactory;
}();

var gillWebglUniformFactory = new StandardUniformFactory();

var StandardVariableTypeMap = function () {
    function StandardVariableTypeMap() {
        _classCallCheck(this, StandardVariableTypeMap);

        this.gillWebglVariableTypes = new Map();
    }

    _createClass(StandardVariableTypeMap, [{
        key: "eachWebglVariableType",
        value: function eachWebglVariableType(action) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = this.gillWebglVariableTypes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var _step11$value = _slicedToArray(_step11.value, 2),
                        webglType = _step11$value[0],
                        gillWebglVariableType = _step11$value[1];

                    action(webglType, gillWebglVariableType);
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
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

var StandardVariableTypeMapFactory = function () {
    function StandardVariableTypeMapFactory() {
        _classCallCheck(this, StandardVariableTypeMapFactory);
    }

    _createClass(StandardVariableTypeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardVariableTypeMap();
        }
    }]);

    return StandardVariableTypeMapFactory;
}();

var gillWebglVariableTypeMapFactory = new StandardVariableTypeMapFactory();

var StandardVariableType = function () {
    function StandardVariableType(dataType, typedArrayConstructor, unitSize) {
        _classCallCheck(this, StandardVariableType);

        this.dataType = dataType;
        this.typedArrayConstructor = typedArrayConstructor;
        this.unitSize = unitSize;
    }

    _createClass(StandardVariableType, [{
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

    return StandardVariableType;
}();

var StandardVariableTypeFactory = function () {
    function StandardVariableTypeFactory() {
        _classCallCheck(this, StandardVariableTypeFactory);
    }

    _createClass(StandardVariableTypeFactory, [{
        key: "construct",
        value: function construct(dataType, typedArrayConstructor, unitSize) {
            return new StandardVariableType(dataType, typedArrayConstructor, unitSize);
        }
    }]);

    return StandardVariableTypeFactory;
}();

var gillWebglVariableTypeFactory = new StandardVariableTypeFactory();

var gillWebglVariableTypeMap = gillWebglVariableTypeMapFactory.construct();
// Add types
gillWebglVariableTypeMap.setWebglVariableType(35664, // gl.FLOAT_VEC2
gillWebglVariableTypeFactory.construct(5126, // gl.FLOAT based on "gl.FLOAT_VEC2"
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
2));
gillWebglVariableTypeMap.setWebglVariableType(35665, // gl.FLOAT_VEC3
gillWebglVariableTypeFactory.construct(5126, // gl.FLOAT
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
3 // Each element will be 3 indices based on "gl.FLOAT_VEC3"
));
gillWebglVariableTypeMap.setWebglVariableType(35678, // gl.SAMPLER_2D
gillWebglVariableTypeFactory.construct(5121, // gl.UNSIGNED_SHORT
Int8Array, // Data will be an array of INT8s (based on "gl.UNSIGNED_SHORT")
1 // Each element will be 1 index based on "gl.UNSIGNED_SHORT"
));
gillWebglVariableTypeMap.setWebglVariableType(5126, // gl.FLOAT
gillWebglVariableTypeFactory.construct(5126, // gl.FLOAT
Float32Array, // Data will be an array of FLOATs (based on "gl.FLOAT")
1 // Each element will be 1 index based on "gl.FLOAT"
));

var gillProgramService = gillProgramServiceFactory.construct(gillWebglAttributeCollectionFactory, gillWebglAttributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglServiceAdapter, textureCollectionFactory, textureFactory, gillWebglUniformCollectionFactory, gillWebglUniformFactory, gillWebglVariableTypeMap);

var StandardGillRenderer = function () {
    function StandardGillRenderer(gillModelBufferService, modelTextureRepository, gillProgram) {
        _classCallCheck(this, StandardGillRenderer);

        this.gillModelBufferService = gillModelBufferService;
        this.modelTextureRepository = modelTextureRepository;
        this.gillProgram = gillProgram;
        this.webglProgram = gillProgram.getWebglProgram();
        this.webglRenderingContext = gillProgram.getWebglRenderingContext();
        //TODO Figure this nonsense out
        // Enable depth testing
        // this.webglRenderingContext.enable(
        //   this.webglRenderingContext.DEPTH_TEST
        // );
        // Enable alpha
        this.webglRenderingContext.blendFunc(this.webglRenderingContext.SRC_ALPHA, this.webglRenderingContext.ONE_MINUS_SRC_ALPHA);
        this.webglRenderingContext.enable(this.webglRenderingContext.BLEND);
    }

    _createClass(StandardGillRenderer, [{
        key: "drawModel",
        value: function drawModel(model) {
            var _this3 = this;

            this.webglRenderingContext.useProgram(this.webglProgram);
            // Bind attributes
            this.gillProgram.forEachAttribute(function (attribute) {
                var attributeName = attribute.getName(),
                    attributeType = attribute.getType();
                _this3.webglRenderingContext.bindBuffer(_this3.webglRenderingContext.ARRAY_BUFFER, _this3.gillModelBufferService.getModelAttributeBuffer(model, attributeName, _this3.webglRenderingContext));
                var attributeData = model.getAttributeData(attributeName);
                if (attributeData.needsBuffered()) {
                    var typedArrayConstructor = attributeType.getTypedArrayConstructor();
                    _this3.webglRenderingContext.bufferData(_this3.webglRenderingContext.ARRAY_BUFFER, typedArrayConstructor.from(attributeData.getData()), attribute.getUsage());
                    attributeData.setNeedsBuffered(false);
                }
                _this3.webglRenderingContext.vertexAttribPointer(attribute.getLocation(), attributeType.getUnitSize(), attributeType.getDataType(), attributeData.normalize(), attributeData.getStride(), attributeData.getOffset());
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
                _this3.webglRenderingContext.activeTexture(_this3.webglRenderingContext[unit]);
                _this3.webglRenderingContext.bindTexture(bindTarget, _this3.modelTextureRepository.getTexture(model, name, _this3.webglRenderingContext));
                if (data.needsBuffered()) {
                    _this3.webglRenderingContext.texImage2D(texture.getImageTarget(), 0, format, format, type.getDataType(), data.getPixels());
                    data.setNeedsBuffered(false);
                }
                _this3.webglRenderingContext.uniform1i(texture.getLocation(), currentTexture);
                currentTexture += 1;
            });
            // Bind uniforms
            this.gillProgram.forEachUniform(function (uniform) {
                var uniformType = uniform.getType();
                var size = uniformType.getUnitSize(),
                    type = uniformType.getDataType() === _this3.webglRenderingContext.FLOAT ? "f" : "i";
                var uniformFunction = "uniform" + size + type + "v";
                _this3.webglRenderingContext[uniformFunction](uniform.getLocation(), model.getUniformData(uniform.getName()));
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

var StandardGillRendererFactory = function () {
    function StandardGillRendererFactory() {
        _classCallCheck(this, StandardGillRendererFactory);
    }

    _createClass(StandardGillRendererFactory, [{
        key: "construct",
        value: function construct(gillModelBufferService, modelTextureRepository, gillProgram) {
            return new StandardGillRenderer(gillModelBufferService, modelTextureRepository, gillProgram);
        }
    }]);

    return StandardGillRendererFactory;
}();

var gillRendererFactory = new StandardGillRendererFactory();

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

var StandardGillRendererServiceFactory = function () {
    function StandardGillRendererServiceFactory() {
        _classCallCheck(this, StandardGillRendererServiceFactory);
    }

    _createClass(StandardGillRendererServiceFactory, [{
        key: "construct",
        value: function construct(modelTextureRepository, gillProgramService, gillRendererFactory) {
            return new StandardGillRendererService(modelTextureRepository, gillProgramService, gillRendererFactory);
        }
    }]);

    return StandardGillRendererServiceFactory;
}();

var gillRendererServiceFactory = new StandardGillRendererServiceFactory();

var gillRendererService = gillRendererServiceFactory.construct(modelTextureRepository, gillProgramService, gillRendererFactory);

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

var StandardGillServiceFactory = function () {
    function StandardGillServiceFactory() {
        _classCallCheck(this, StandardGillServiceFactory);
    }

    _createClass(StandardGillServiceFactory, [{
        key: "construct",
        value: function construct(gillModelAttributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, gillProgramSourceFactory, gillRendererService, textureDataRepository, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, gillWebglService) {
            return new StandardGillService(gillModelAttributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, gillProgramSourceFactory, gillRendererService, textureDataRepository, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, gillWebglService);
        }
    }]);

    return StandardGillServiceFactory;
}();

var gillServiceFactory = new StandardGillServiceFactory();

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

var StandardTextureDataFactory = function () {
    function StandardTextureDataFactory() {
        _classCallCheck(this, StandardTextureDataFactory);
    }

    _createClass(StandardTextureDataFactory, [{
        key: "construct",
        value: function construct(format, pixels) {
            return new StandardTextureData(format, pixels);
        }
    }]);

    return StandardTextureDataFactory;
}();

var textureDataFactory = new StandardTextureDataFactory();

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
            var textureData = void 0;
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

var StandardTextureDataRepositoryFactory = function () {
    function StandardTextureDataRepositoryFactory() {
        _classCallCheck(this, StandardTextureDataRepositoryFactory);
    }

    _createClass(StandardTextureDataRepositoryFactory, [{
        key: "construct",
        value: function construct(textureDataFactory) {
            return new StandardTextureDataRepository(textureDataFactory);
        }
    }]);

    return StandardTextureDataRepositoryFactory;
}();

var textureDataRepositoryFactory = new StandardTextureDataRepositoryFactory();

var textureDataRepository = textureDataRepositoryFactory.construct(textureDataFactory);

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

var StandardGillUniformValueMapFactory = function () {
    function StandardGillUniformValueMapFactory() {
        _classCallCheck(this, StandardGillUniformValueMapFactory);
    }

    _createClass(StandardGillUniformValueMapFactory, [{
        key: "construct",
        value: function construct() {
            return new StandardGillUniformValueMap();
        }
    }]);

    return StandardGillUniformValueMapFactory;
}();

var gillUniformValueMapFactory = new StandardGillUniformValueMapFactory();

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

var StandardGillVector2Factory = function () {
    function StandardGillVector2Factory() {
        _classCallCheck(this, StandardGillVector2Factory);
    }

    _createClass(StandardGillVector2Factory, [{
        key: "construct",
        value: function construct(v1, v2) {
            return new StandardGillVector2(v1, v2);
        }
    }]);

    return StandardGillVector2Factory;
}();

var gillVector2Factory = new StandardGillVector2Factory();

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

var StandardGillVector3Factory = function () {
    function StandardGillVector3Factory() {
        _classCallCheck(this, StandardGillVector3Factory);
    }

    _createClass(StandardGillVector3Factory, [{
        key: "construct",
        value: function construct(v1, v2, v3) {
            return new StandardGillVector3(v1, v2, v3);
        }
    }]);

    return StandardGillVector3Factory;
}();

var gillVector3Factory = new StandardGillVector3Factory();

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

var StandardGillVertexFactory = function () {
    function StandardGillVertexFactory() {
        _classCallCheck(this, StandardGillVertexFactory);
    }

    _createClass(StandardGillVertexFactory, [{
        key: "construct",
        value: function construct(gillAttributeValues) {
            return new StandardGillVertex(gillAttributeValues);
        }
    }]);

    return StandardGillVertexFactory;
}();

var gillVertexFactory = new StandardGillVertexFactory();

var gillService = gillServiceFactory.construct(gillModelAttributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, standardGillProgramSourceFactory, gillRendererService, textureDataRepository, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, webglService);

module.exports = gillService;