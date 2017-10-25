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