"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglService = function () {
    function StandardGillWebglService(webglProgramFactory, webglAttributeCollectionFactory, webglAttributeFactory, webglAttributeTypeFactory, webglAttributeTypeMap, webglUniformCollectionFactory, webglUniformFactory, webglUniformTypeFactory, webglUniformTypeMap) {
        _classCallCheck(this, StandardGillWebglService);

        this.webglProgramFactory = webglProgramFactory;
        this.webglAttributeCollectionFactory = webglAttributeCollectionFactory;
        this.webglAttributeFactory = webglAttributeFactory;
        this.webglAttributeTypeFactory = webglAttributeTypeFactory;
        this.webglAttributeTypeMap = webglAttributeTypeMap;
        this.webglUniformCollectionFactory = webglUniformCollectionFactory;
        this.webglUniformFactory = webglUniformFactory;
        this.webglUniformTypeFactory = webglUniformTypeFactory;
        this.webglUniformTypeMap = webglUniformTypeMap;
    }

    _createClass(StandardGillWebglService, [{
        key: "constructAttributeCollection",
        value: function constructAttributeCollection() {
            return this.webglAttributeCollectionFactory.construct();
        }
    }, {
        key: "constructUniformCollection",
        value: function constructUniformCollection() {
            return this.webglUniformCollectionFactory.construct();
        }
    }, {
        key: "getAttribute",
        value: function getAttribute(webglRenderingContext, webglProgram, attributeIndex) {
            var attributeInfo = webglRenderingContext.getActiveAttrib(webglProgram, attributeIndex);
            var attributeTypeExists = this.webglAttributeTypeMap.hasAttributeType(attributeInfo.type);
            if (!attributeTypeExists) {
                throw new Error("Unknown WebGL variable type '" + attributeInfo.type + "' ('" + attributeInfo.name + "')");
            }
            var attributeLocation = webglRenderingContext.getAttribLocation(webglProgram, attributeInfo.name);
            webglRenderingContext.enableVertexAttribArray(attributeLocation);
            return this.webglAttributeFactory.construct(attributeInfo.name, this.webglAttributeTypeMap.getAttributeType(attributeInfo.type), attributeLocation, webglRenderingContext.STATIC_DRAW);
        }
    }, {
        key: "getUniform",
        value: function getUniform(webglRenderingContext, webglProgram, uniformIndex) {
            var uniformInfo = webglRenderingContext.getActiveUniform(webglProgram, uniformIndex);
            var uniformTypeExists = this.webglUniformTypeMap.hasUniformType(uniformInfo.type);
            if (!uniformTypeExists) {
                throw new Error("Unknown WebGL variable type '" + uniformInfo.type + "' ('" + uniformInfo.name + "')");
            }
            var uniformLocation = webglRenderingContext.getUniformLocation(webglProgram, uniformInfo.name);
            return this.webglUniformFactory.construct(uniformInfo.name, this.webglUniformTypeMap.getUniformType(uniformInfo.type), uniformLocation);
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
            return this.webglProgramFactory.construct(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "setAttributeType",
        value: function setAttributeType(webglType, dataType, typedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset) {
            this.webglAttributeTypeMap.setAttributeType(webglType, this.webglAttributeTypeFactory.construct(dataType, typedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset));
        }
    }, {
        key: "setUniformType",
        value: function setUniformType(webglType, dataType, dataSize) {
            this.webglUniformTypeMap.setUniformType(webglType, this.webglUniformTypeFactory.construct(dataType, dataSize));
        }
    }]);

    return StandardGillWebglService;
}();

exports.default = StandardGillWebglService;