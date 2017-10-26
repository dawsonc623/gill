"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformTypeMap = function () {
    function StandardGillUniformTypeMap() {
        _classCallCheck(this, StandardGillUniformTypeMap);

        this.uniformType = new Map();
    }

    _createClass(StandardGillUniformTypeMap, [{
        key: "getUniformType",
        value: function getUniformType(webglType) {
            return this.uniformType.get(webglType);
        }
    }, {
        key: "hasUniformType",
        value: function hasUniformType(webglType) {
            return this.uniformType.has(webglType);
        }
    }, {
        key: "setUniformType",
        value: function setUniformType(webglType, gillUniformType) {
            this.uniformType.set(webglType, gillUniformType);
        }
    }]);

    return StandardGillUniformTypeMap;
}();

exports.default = StandardGillUniformTypeMap;