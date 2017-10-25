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