"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglRenderingContextRepository = function () {
    function StandardWebglRenderingContextRepository() {
        _classCallCheck(this, StandardWebglRenderingContextRepository);
    }

    _createClass(StandardWebglRenderingContextRepository, [{
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext(canvas) {
            var webglRenderingContext = canvas.getContext("webgl");
            if (webglRenderingContext === null) {
                webglRenderingContext = canvas.getContext("experimental-webgl");
            }
            return webglRenderingContext;
        }
    }]);

    return StandardWebglRenderingContextRepository;
}();

exports.default = StandardWebglRenderingContextRepository;