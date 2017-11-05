"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglProgramService = function () {
    function StandardGillWebglProgramService(gillWebglAttributeFactory, gillWebglAttributeTypeFactory, gillWebglAttributeTypeMap, gillWebglProgramFactory, gillWebglUniformFactory, gillWebglUniformTypeFactory, gillWebglUniformTypeMap) {
        _classCallCheck(this, StandardGillWebglProgramService);

        this.gillWebglAttributeFactory = gillWebglAttributeFactory;
        this.gillWebglAttributeTypeFactory = gillWebglAttributeTypeFactory;
        this.gillWebglAttributeTypeMap = gillWebglAttributeTypeMap;
        this.gillWebglProgramFactory = gillWebglProgramFactory;
        this.gillWebglUniformFactory = gillWebglUniformFactory;
        this.gillWebglUniformTypeFactory = gillWebglUniformTypeFactory;
        this.gillWebglUniformTypeMap = gillWebglUniformTypeMap;
    }

    _createClass(StandardGillWebglProgramService, [{
        key: "getAttribute",
        value: function getAttribute(webglRenderingContext, webglProgram, attributeIndex) {
            var attributeInfo = webglRenderingContext.getActiveAttrib(webglProgram, attributeIndex);
            var attributeTypeExists = this.gillWebglAttributeTypeMap.hasAttributeType(attributeInfo.type);
            if (!attributeTypeExists) {
                throw new Error("Unknown WebGL variable type '" + attributeInfo.type + "' ('" + attributeInfo.name + "')");
            }
            var attributeLocation = webglRenderingContext.getAttribLocation(webglProgram, attributeInfo.name);
            webglRenderingContext.enableVertexAttribArray(attributeLocation);
            return this.gillWebglAttributeFactory.construct(attributeInfo.name, this.gillWebglAttributeTypeMap.getAttributeType(attributeInfo.type), attributeLocation, webglRenderingContext.STATIC_DRAW);
        }
    }, {
        key: "getUniform",
        value: function getUniform(webglRenderingContext, webglProgram, uniformIndex) {
            var uniformInfo = webglRenderingContext.getActiveUniform(webglProgram, uniformIndex);
            var uniformTypeExists = this.gillWebglUniformTypeMap.hasUniformType(uniformInfo.type);
            if (!uniformTypeExists) {
                throw new Error("Unknown WebGL variable type '" + uniformInfo.type + "' ('" + uniformInfo.name + "')");
            }
            var uniformLocation = webglRenderingContext.getUniformLocation(webglProgram, uniformInfo.name);
            return this.gillWebglUniformFactory.construct(uniformInfo.name, this.gillWebglUniformTypeMap.getUniformType(uniformInfo.type), uniformLocation);
        }
    }, {
        key: "getWebglProgram",
        value: function getWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            return this.gillWebglProgramFactory.construct(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "setAttributeType",
        value: function setAttributeType(webglType, dataType, typedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset) {
            this.gillWebglAttributeTypeMap.setAttributeType(webglType, this.gillWebglAttributeTypeFactory.construct(dataType, typedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset));
        }
    }, {
        key: "setUniformType",
        value: function setUniformType(webglType, dataType, dataSize) {
            this.gillWebglUniformTypeMap.setUniformType(webglType, this.gillWebglUniformTypeFactory.construct(dataType, dataSize));
        }
    }]);

    return StandardGillWebglProgramService;
}();

exports.default = StandardGillWebglProgramService;