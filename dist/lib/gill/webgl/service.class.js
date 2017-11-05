"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglService = function () {
    function StandardGillWebglService(gillWebglAttributeCollectionFactory, gillWebglProgramService, gillWebglUniformCollectionFactory) {
        _classCallCheck(this, StandardGillWebglService);

        this.gillWebglAttributeCollectionFactory = gillWebglAttributeCollectionFactory;
        this.gillWebglProgramService = gillWebglProgramService;
        this.gillWebglUniformCollectionFactory = gillWebglUniformCollectionFactory;
    }

    _createClass(StandardGillWebglService, [{
        key: "getAttributes",
        value: function getAttributes(webglRenderingContext, webglProgram) {
            var attributeCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_ATTRIBUTES);
            var attributes = this.gillWebglAttributeCollectionFactory.construct();
            for (var index = 0; index < attributeCount; index += 1) {
                attributes.addAttribute(this.gillWebglProgramService.getAttribute(webglRenderingContext, webglProgram, index));
            }
            return attributes;
        }
    }, {
        key: "getUniforms",
        value: function getUniforms(webglRenderingContext, webglProgram) {
            var uniformCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_UNIFORMS);
            var uniforms = this.gillWebglUniformCollectionFactory.construct();
            for (var index = 0; index < uniformCount; index += 1) {
                uniforms.addUniform(this.gillWebglProgramService.getUniform(webglRenderingContext, webglProgram, index));
            }
            return uniforms;
        }
    }, {
        key: "getWebglContext",
        value: function getWebglContext(canvas) {
            var webglRenderingContext = canvas.getContext("webgl");
            if (webglRenderingContext === null) {
                webglRenderingContext = canvas.getContext("experimental-webgl");
            }
            return webglRenderingContext;
        }
    }, {
        key: "getWebglProgram",
        value: function getWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            return this.gillWebglProgramService.getWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "setAttributeType",
        value: function setAttributeType(webglType, dataType, gillWebglTypedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset) {
            this.gillWebglProgramService.setAttributeType(webglType, dataType, gillWebglTypedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset);
        }
    }, {
        key: "setUniformType",
        value: function setUniformType(webglType, dataType, dataSize) {
            this.gillWebglProgramService.setUniformType(webglType, dataType, dataSize);
        }
    }]);

    return StandardGillWebglService;
}();

exports.default = StandardGillWebglService;