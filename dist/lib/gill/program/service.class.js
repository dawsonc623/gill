"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramService = function () {
    function StandardGillProgramService(attributeCollectionFactory, attributeFactory, gillProgramCache, gillProgramFactory, gillProgramWebglService, uniformCollectionFactory, uniformFactory, variableTypes) {
        _classCallCheck(this, StandardGillProgramService);

        this.attributeCollectionFactory = attributeCollectionFactory;
        this.attributeFactory = attributeFactory;
        this.gillProgramCache = gillProgramCache;
        this.gillProgramFactory = gillProgramFactory;
        this.gillProgramWebglService = gillProgramWebglService;
        this.uniformCollectionFactory = uniformCollectionFactory;
        this.uniformFactory = uniformFactory;
        this.variableTypes = variableTypes;
    }

    _createClass(StandardGillProgramService, [{
        key: "getProgram",
        value: function getProgram(webglRenderingContext, gillProgramSource) {
            var programExists = this.gillProgramCache.hasProgram(webglRenderingContext, gillProgramSource);
            var program = void 0;
            if (programExists) {
                program = this.gillProgramCache.getProgram(webglRenderingContext, gillProgramSource);
            } else {
                var webglProgram = this.gillProgramWebglService.createWebglProgram(webglRenderingContext, gillProgramSource.getVertexShaderSource(), gillProgramSource.getFragmentShaderSource());
                var attributeInfo = this.gillProgramWebglService.getAttributes(webglRenderingContext, webglProgram),
                    attributes = this.attributeCollectionFactory.construct(),
                    uniformInfo = this.gillProgramWebglService.getUniforms(webglRenderingContext, webglProgram),
                    uniforms = this.uniformCollectionFactory.construct();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = attributeInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var attribute = _step.value;

                        var location = webglRenderingContext.getAttribLocation(webglProgram, attribute.name);
                        webglRenderingContext.enableVertexAttribArray(location);
                        attributes.addAttribute(this.attributeFactory.construct(attribute.name, this.variableTypes.getWebglVariableType(attribute.type), location, webglRenderingContext.STATIC_DRAW));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = uniformInfo[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var uniform = _step2.value;

                        var _location = webglRenderingContext.getUniformLocation(webglProgram, uniform.name);
                        uniforms.addUniform(this.uniformFactory.construct(uniform.name, this.variableTypes.getWebglVariableType(uniform.type), _location));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                program = this.gillProgramFactory.construct(webglRenderingContext, webglProgram, attributes, uniforms);
                this.gillProgramCache.cacheProgram(webglRenderingContext, gillProgramSource, program);
            }
            return program;
        }
    }]);

    return StandardGillProgramService;
}();

exports.default = StandardGillProgramService;