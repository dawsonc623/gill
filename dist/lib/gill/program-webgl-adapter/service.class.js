"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgramWebglServiceAdapter = function () {
    function ProgramWebglServiceAdapter(webglService) {
        _classCallCheck(this, ProgramWebglServiceAdapter);

        this.webglService = webglService;
    }

    _createClass(ProgramWebglServiceAdapter, [{
        key: "createWebglProgram",
        value: function createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            return this.webglService.createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "getAttributes",
        value: function getAttributes(webglRenderingContext, webglProgram) {
            return this.webglService.getAttributes(webglRenderingContext, webglProgram);
        }
    }, {
        key: "getUniforms",
        value: function getUniforms(webglRenderingContext, webglProgram) {
            return this.webglService.getUniforms(webglRenderingContext, webglProgram);
        }
    }]);

    return ProgramWebglServiceAdapter;
}();

exports.default = ProgramWebglServiceAdapter;