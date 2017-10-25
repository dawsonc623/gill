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