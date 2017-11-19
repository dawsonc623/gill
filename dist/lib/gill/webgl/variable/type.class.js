"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglVariable = function () {
    function StandardGillWebglVariable(dataType, typedArrayFactory, unitSize) {
        _classCallCheck(this, StandardGillWebglVariable);

        this.dataType = dataType;
        this.typedArrayFactory = typedArrayFactory;
        this.unitSize = unitSize;
    }

    _createClass(StandardGillWebglVariable, [{
        key: "getDataType",
        value: function getDataType() {
            return this.dataType;
        }
    }, {
        key: "getTypedArrayFactory",
        value: function getTypedArrayFactory() {
            return this.typedArrayFactory;
        }
    }, {
        key: "getUnitSize",
        value: function getUnitSize() {
            return this.unitSize;
        }
    }]);

    return StandardGillWebglVariable;
}();

exports.default = StandardGillWebglVariable;