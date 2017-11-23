"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _programRenderingContextMap = require("lib/gill/webgl/program-rendering-context-map.class");

var _programRenderingContextMap2 = _interopRequireDefault(_programRenderingContextMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglProgramRenderingContextMapFactory = function () {
    function StandardGillWebglProgramRenderingContextMapFactory() {
        _classCallCheck(this, StandardGillWebglProgramRenderingContextMapFactory);
    }

    _createClass(StandardGillWebglProgramRenderingContextMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _programRenderingContextMap2.default();
        }
    }]);

    return StandardGillWebglProgramRenderingContextMapFactory;
}();

exports.default = StandardGillWebglProgramRenderingContextMapFactory;