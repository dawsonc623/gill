"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglShaderFactory = function () {
    function StandardWebglShaderFactory() {
        _classCallCheck(this, StandardWebglShaderFactory);
    }

    _createClass(StandardWebglShaderFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, shaderSource, shaderType) {
            var shader = webglRenderingContext.createShader(shaderType);
            webglRenderingContext.shaderSource(shader, shaderSource);
            webglRenderingContext.compileShader(shader);
            var compiledSuccessfully = webglRenderingContext.getShaderParameter(shader, webglRenderingContext.COMPILE_STATUS);
            if (!compiledSuccessfully) {
                var errorMessage = webglRenderingContext.getShaderInfoLog(shader),
                    shaderName = shaderType === webglRenderingContext.FRAGMENT_SHADER ? "fragment" : "vertex";
                webglRenderingContext.deleteShader(shader);
                throw new Error("An error occurred compiling the " + shaderName + " shader: " + errorMessage);
            }
            return shader;
        }
    }]);

    return StandardWebglShaderFactory;
}();

exports.default = StandardWebglShaderFactory;