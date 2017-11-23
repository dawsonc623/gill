"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillService = function () {
    function StandardGillService(gillModelAttributeDataRepository, gillAttributeValueMapFactory, gillIndexCollectionFactory, gillModelBufferService, gillModelFactory, gillNumberFactory, gillProgramSourceFactory, gillRendererService, gillUniformValueMapFactory, gillVector2Factory, gillVector3Factory, gillVertexFactory, gillWebglService) {
        _classCallCheck(this, StandardGillService);

        this.gillModelAttributeDataRepository = gillModelAttributeDataRepository;
        this.gillAttributeValueMapFactory = gillAttributeValueMapFactory;
        this.gillIndexCollectionFactory = gillIndexCollectionFactory;
        this.gillModelBufferService = gillModelBufferService;
        this.gillModelFactory = gillModelFactory;
        this.gillNumberFactory = gillNumberFactory;
        this.gillProgramSourceFactory = gillProgramSourceFactory;
        this.gillRendererService = gillRendererService;
        this.gillUniformValueMapFactory = gillUniformValueMapFactory;
        this.gillVector2Factory = gillVector2Factory;
        this.gillVector3Factory = gillVector3Factory;
        this.gillVertexFactory = gillVertexFactory;
        this.gillWebglService = gillWebglService;
    }

    _createClass(StandardGillService, [{
        key: "clearCanvas",
        value: function clearCanvas(canvas) {
            var webglRenderingContext = this.gillWebglService.getWebglContext(canvas);
            webglRenderingContext.clear(webglRenderingContext.COLOR_BUFFER_BIT | webglRenderingContext.DEPTH_BUFFER_BIT);
        }
    }, {
        key: "createModel",
        value: function createModel() {
            return this.gillModelFactory.construct(this.gillModelAttributeDataRepository, this.gillIndexCollectionFactory.construct(), this.gillUniformValueMapFactory.construct());
        }
    }, {
        key: "createNumber",
        value: function createNumber(value) {
            return this.gillNumberFactory.construct(value);
        }
    }, {
        key: "createVector2",
        value: function createVector2(v1, v2) {
            return this.gillVector2Factory.construct(v1, v2);
        }
    }, {
        key: "createVector3",
        value: function createVector3(v1, v2, v3) {
            return this.gillVector3Factory.construct(v1, v2, v3);
        }
    }, {
        key: "createVertex",
        value: function createVertex() {
            return this.gillVertexFactory.construct(this.gillAttributeValueMapFactory.construct());
        }
    }, {
        key: "getGillProgram",
        value: function getGillProgram(vertexShaderSource, fragmentShaderSource) {
            return this.gillProgramSourceFactory.construct(vertexShaderSource, fragmentShaderSource);
        }
    }, {
        key: "drawModel",
        value: function drawModel(model, canvas, gillProgramSource) {
            var webglRenderingContext = this.gillWebglService.getWebglContext(canvas);
            var gillRenderer = this.gillRendererService.getRenderer(webglRenderingContext, this.gillModelBufferService, gillProgramSource);
            gillRenderer.drawModel(model);
        }
    }]);

    return StandardGillService;
}();

exports.default = StandardGillService;