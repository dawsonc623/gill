"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglBufferRenderingContextMap = function () {
    function StandardGillWebglBufferRenderingContextMap() {
        _classCallCheck(this, StandardGillWebglBufferRenderingContextMap);

        this.webglRenderingContexts = new Map();
    }

    _createClass(StandardGillWebglBufferRenderingContextMap, [{
        key: "eachWebglRenderingContext",
        value: function eachWebglRenderingContext(action) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.webglRenderingContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        webglBuffer = _step$value[0],
                        webglRenderingContext = _step$value[1];

                    action(webglBuffer, webglRenderingContext);
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
        }
    }, {
        key: "hasWebglRenderingContext",
        value: function hasWebglRenderingContext(webglBuffer) {
            return this.webglRenderingContexts.has(webglBuffer);
        }
    }, {
        key: "getWebglRenderingContext",
        value: function getWebglRenderingContext(webglBuffer) {
            return this.webglRenderingContexts.get(webglBuffer);
        }
    }, {
        key: "setWebglRenderingContext",
        value: function setWebglRenderingContext(webglBuffer, webglRenderingContext) {
            this.webglRenderingContexts.set(webglBuffer, webglRenderingContext);
        }
    }]);

    return StandardGillWebglBufferRenderingContextMap;
}();

exports.default = StandardGillWebglBufferRenderingContextMap;