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