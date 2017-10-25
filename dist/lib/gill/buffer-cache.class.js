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