"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglShaderFactory = function () {
    function StandardGillWebglShaderFactory() {
        _classCallCheck(this, StandardGillWebglShaderFactory);
    }

    _createClass(StandardGillWebglShaderFactory, [{
        key: "construct",
        value: function construct(shaderSource, shaderType, webglRenderingContext) {
            var shader = webglRenderingContext.createShader(shaderType);
            webglRenderingContext.shaderSource(shader, shaderSource);
            webglRenderingContext.compileShader(shader);
            if (!webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS)) {
                var log = webglRenderingContext.getShaderInfoLog(shader),
                    shaderName = shaderType == webglRenderingContext.FRAGMENT_SHADER ? "fragment" : "vertex";
                webglRenderingContext.deleteShader(shader);
                throw "An error occurred compiling the " + shaderName + " shader: " + log;
            }
            return shader;
        }
    }]);

    return StandardGillWebglShaderFactory;
}();

exports.default = StandardGillWebglShaderFactory;