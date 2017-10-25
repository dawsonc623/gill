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