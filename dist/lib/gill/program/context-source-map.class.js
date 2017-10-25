"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillContextSourceMap = function () {
    function StandardGillContextSourceMap() {
        _classCallCheck(this, StandardGillContextSourceMap);

        this.contextSources = new Map();
    }

    _createClass(StandardGillContextSourceMap, [{
        key: "hasSources",
        value: function hasSources(WebGLRenderingContext) {
            return this.contextSources.has(WebGLRenderingContext);
        }
    }, {
        key: "getSources",
        value: function getSources(WebGLRenderingContext) {
            return this.contextSources.get(WebGLRenderingContext);
        }
    }, {
        key: "setSources",
        value: function setSources(WebGLRenderingContext, gillProgramSources) {
            this.contextSources.set(WebGLRenderingContext, gillProgramSources);
        }
    }]);

    return StandardGillContextSourceMap;
}();

exports.default = StandardGillContextSourceMap;