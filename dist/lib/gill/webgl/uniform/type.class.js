"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglUniformType = function () {
    function StandardGillWebglUniformType(dataType, dataSize) {
        _classCallCheck(this, StandardGillWebglUniformType);

        this.dataType = dataType;
        this.dataSize = dataSize;
    }

    _createClass(StandardGillWebglUniformType, [{
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

    return StandardGillWebglUniformType;
}();

exports.default = StandardGillWebglUniformType;