"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglProgramFactory = function () {
    function StandardWebglProgramFactory() {
        _classCallCheck(this, StandardWebglProgramFactory);
    }

    _createClass(StandardWebglProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, vertexShader, fragmentShader) {
            var webglProgram = webglRenderingContext.createProgram();
            webglRenderingContext.attachShader(webglProgram, vertexShader);
            webglRenderingContext.attachShader(webglProgram, fragmentShader);
            webglRenderingContext.linkProgram(webglProgram);
            var linkedSuccessfully = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS);
            if (!linkedSuccessfully) {
                var errorMessage = webglRenderingContext.getProgramInfoLog(webglProgram);
                throw new Error("Unable to initialize the WebGL program: " + errorMessage);
            }
            return webglProgram;
        }
    }]);

    return StandardWebglProgramFactory;
}();

exports.default = StandardWebglProgramFactory;