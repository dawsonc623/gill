"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillProgramCache = function () {
    function StandardGillProgramCache(gillContextSources, gillSourceProgramMapFactory) {
        _classCallCheck(this, StandardGillProgramCache);

        this.gillContextSources = gillContextSources;
        this.gillSourceProgramMapFactory = gillSourceProgramMapFactory;
    }

    _createClass(StandardGillProgramCache, [{
        key: "cacheProgram",
        value: function cacheProgram(webglRenderingContext, gillProgramSource, gillProgram) {
            var gillPrograms = this.gillContextSources.getSources(webglRenderingContext);
            if (gillPrograms === undefined) {
                gillPrograms = this.gillSourceProgramMapFactory.construct();
                this.gillContextSources.setSources(webglRenderingContext, gillPrograms);
            }
            gillPrograms.setProgram(gillProgramSource, gillProgram);
        }
    }, {
        key: "hasProgram",
        value: function hasProgram(webglRenderingContext, gillProgramSource) {
            var hasPrograms = this.gillContextSources.hasSources(webglRenderingContext);
            var hasProgram = false;
            if (hasPrograms) {
                hasProgram = this.gillContextSources.getSources(webglRenderingContext).hasProgram(gillProgramSource);
            }
            return hasProgram;
        }
    }, {
        key: "getProgram",
        value: function getProgram(webglRenderingContext, gillProgramSource) {
            var gillPrograms = this.gillContextSources.getSources(webglRenderingContext);
            var program = void 0;
            if (gillPrograms !== undefined) {
                program = gillPrograms.getProgram(gillProgramSource);
            }
            if (program === undefined) {
                throw new Error("No such cached program");
            }
            return program;
        }
    }]);

    return StandardGillProgramCache;
}();

exports.default = StandardGillProgramCache;