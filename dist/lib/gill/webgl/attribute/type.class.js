"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeType = function () {
    function StandardGillAttributeType(dataType, typedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset) {
        _classCallCheck(this, StandardGillAttributeType);

        this.dataType = dataType;
        this.typedArrayFactory = typedArrayFactory;
        this.dataSize = dataSize;
        this.dataIsNormalized = dataIsNormalized;
        this.dataStride = dataStride;
        this.dataOffset = dataOffset;
    }

    _createClass(StandardGillAttributeType, [{
        key: "getDataIsNormalized",
        value: function getDataIsNormalized() {
            return this.dataIsNormalized;
        }
    }, {
        key: "getDataOffset",
        value: function getDataOffset() {
            return this.dataOffset;
        }
    }, {
        key: "getDataSize",
        value: function getDataSize() {
            return this.dataSize;
        }
    }, {
        key: "getDataStride",
        value: function getDataStride() {
            return this.dataStride;
        }
    }, {
        key: "getDataType",
        value: function getDataType() {
            return this.dataType;
        }
    }, {
        key: "toTypedArray",
        value: function toTypedArray(webglVariableData) {
            return this.typedArrayFactory.construct(webglVariableData);
        }
    }]);

    return StandardGillAttributeType;
}();

exports.default = StandardGillAttributeType;