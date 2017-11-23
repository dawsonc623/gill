"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglService = function () {
    function StandardGillWebglService(gillWebglAttributeCollectionFactory, gillWebglBufferRenderingContexts, gillWebglProgramFactory, gillWebglProgramRenderingContexts, gillWebglProgramService, gillWebglRenderingContextRepository, gillWebglUniformCollectionFactory) {
        _classCallCheck(this, StandardGillWebglService);

        this.gillWebglAttributeCollectionFactory = gillWebglAttributeCollectionFactory;
        this.gillWebglBufferRenderingContexts = gillWebglBufferRenderingContexts;
        this.gillWebglProgramFactory = gillWebglProgramFactory;
        this.gillWebglProgramRenderingContexts = gillWebglProgramRenderingContexts;
        this.gillWebglProgramService = gillWebglProgramService;
        this.gillWebglRenderingContextRepository = gillWebglRenderingContextRepository;
        this.gillWebglUniformCollectionFactory = gillWebglUniformCollectionFactory;
    }

    _createClass(StandardGillWebglService, [{
        key: "createWebglBuffer",
        value: function createWebglBuffer(webglRenderingContext) {
            var webglBuffer = webglRenderingContext.createBuffer();
            this.gillWebglBufferRenderingContexts.setWebglRenderingContext(webglBuffer, webglRenderingContext);
            return webglBuffer;
        }
    }, {
        key: "createWebglProgram",
        value: function createWebglProgram(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            var webglProgram = this.gillWebglProgramFactory.construct(webglRenderingContext, vertexShaderSource, fragmentShaderSource);
            this.gillWebglProgramRenderingContexts.setWebglRenderingContext(webglProgram, webglRenderingContext);
            return webglProgram;
        }
    }, {
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
            return this.gillWebglRenderingContextRepository.getWebglRenderingContext(canvas);
        }
    }]);

    return StandardGillWebglService;
}();

exports.default = StandardGillWebglService;