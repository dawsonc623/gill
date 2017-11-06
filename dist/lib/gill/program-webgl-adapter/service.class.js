"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GillProgramWebglServiceAdapter = function () {
    function GillProgramWebglServiceAdapter(gillProgramWebglAttributeCollectionAdapterFactory, gillProgramWebglUniformCollectionAdapterFactory, gillWebglService) {
        _classCallCheck(this, GillProgramWebglServiceAdapter);

        this.gillProgramWebglAttributeCollectionAdapterFactory = gillProgramWebglAttributeCollectionAdapterFactory;
        this.gillProgramWebglUniformCollectionAdapterFactory = gillProgramWebglUniformCollectionAdapterFactory;
        this.gillWebglService = gillWebglService;
    }

    _createClass(GillProgramWebglServiceAdapter, [{
        key: "getAttributes",
        value: function getAttributes(webglRenderingContext, webglProgram) {
            var attributes = this.gillWebglService.getAttributes(webglRenderingContext, webglProgram);
            return this.gillProgramWebglAttributeCollectionAdapterFactory.construct(attributes);
        }
    }, {
        key: "getUniforms",
        value: function getUniforms(webglRenderingContext, webglProgram) {
            var uniforms = this.gillWebglService.getUniforms(webglRenderingContext, webglProgram);
            return this.gillProgramWebglUniformCollectionAdapterFactory.construct(uniforms);
        }
    }, {
        key: "getWebglProgram",
        value: function getWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            return this.gillWebglService.getWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }]);

    return GillProgramWebglServiceAdapter;
}();

exports.default = GillProgramWebglServiceAdapter;