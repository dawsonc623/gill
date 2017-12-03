"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardWebglService = function () {
    function StandardWebglService(webglBufferRenderingContexts, webglProgramFactory, webglProgramRenderingContexts, webglRenderingContextRepository, webglShaderFactory, webglTextureRenderingContexts) {
        _classCallCheck(this, StandardWebglService);

        this.webglBufferRenderingContexts = webglBufferRenderingContexts;
        this.webglProgramFactory = webglProgramFactory;
        this.webglProgramRenderingContexts = webglProgramRenderingContexts;
        this.webglRenderingContextRepository = webglRenderingContextRepository;
        this.webglShaderFactory = webglShaderFactory;
        this.webglTextureRenderingContexts = webglTextureRenderingContexts;
    }

    _createClass(StandardWebglService, [{
        key: "createWebglBuffer",
        value: function createWebglBuffer(webglRenderingContext) {
            var webglBuffer = webglRenderingContext.createBuffer();
            this.webglBufferRenderingContexts.setWebglRenderingContext(webglBuffer, webglRenderingContext);
            return webglBuffer;
        }
    }, {
        key: "createWebglProgram",
        value: function createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            var fragmentShader = this.webglShaderFactory.construct(webglRenderingContext, fragmentShaderSource, webglRenderingContext.FRAGMENT_SHADER),
                vertexShader = this.webglShaderFactory.construct(webglRenderingContext, vertexShaderSource, webglRenderingContext.VERTEX_SHADER);
            var webglProgram = this.webglProgramFactory.construct(webglRenderingContext, vertexShader, fragmentShader);
            this.webglProgramRenderingContexts.setWebglRenderingContext(webglProgram, webglRenderingContext);
            return webglProgram;
        }
    }, {
        key: "createWebglTexture",
        value: function createWebglTexture(webglRenderingContext) {
            var webglTexture = webglRenderingContext.createTexture();
            //TODO Remove hard-coding
            webglRenderingContext.bindTexture(webglRenderingContext.TEXTURE_2D, webglTexture);
            webglRenderingContext.texParameteri(webglRenderingContext.TEXTURE_2D, webglRenderingContext.TEXTURE_MIN_FILTER, webglRenderingContext.LINEAR);
            webglRenderingContext.texParameteri(webglRenderingContext.TEXTURE_2D, webglRenderingContext.TEXTURE_WRAP_S, webglRenderingContext.REPEAT);
            webglRenderingContext.texParameteri(webglRenderingContext.TEXTURE_2D, webglRenderingContext.TEXTURE_WRAP_T, webglRenderingContext.REPEAT);
            webglRenderingContext.bindTexture(webglRenderingContext.TEXTURE_2D, null);
            this.webglTextureRenderingContexts.setWebglRenderingContext(webglTexture, webglRenderingContext);
            return webglTexture;
        }
    }, {
        key: "getAttributes",
        value: function getAttributes(webglRenderingContext, webglProgram) {
            var attributeCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_ATTRIBUTES);
            var attributes = new Array(attributeCount);
            for (var attributeIndex = 0; attributeIndex < attributeCount; attributeIndex += 1) {
                attributes[attributeIndex] = webglRenderingContext.getActiveAttrib(webglProgram, attributeIndex);
            }
            return attributes;
        }
    }, {
        key: "getUniforms",
        value: function getUniforms(webglRenderingContext, webglProgram) {
            var uniformCount = webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.ACTIVE_UNIFORMS);
            var uniforms = new Array(uniformCount);
            for (var uniformIndex = 0; uniformIndex < uniformCount; uniformIndex += 1) {
                uniforms[uniformIndex] = webglRenderingContext.getActiveUniform(webglProgram, uniformIndex);
            }
            return uniforms;
        }
    }, {
        key: "getWebglContext",
        value: function getWebglContext(canvas) {
            return this.webglRenderingContextRepository.getWebglRenderingContext(canvas);
        }
    }]);

    return StandardWebglService;
}();

exports.default = StandardWebglService;