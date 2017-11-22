"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataRepository = function () {
    function StandardGillModelAttributeDataRepository(gillModelAttributeDataCache, gillModelAttributeDataFactory) {
        _classCallCheck(this, StandardGillModelAttributeDataRepository);

        this.gillModelAttributeDataCache = gillModelAttributeDataCache;
        this.gillModelAttributeDataFactory = gillModelAttributeDataFactory;
    }

    _createClass(StandardGillModelAttributeDataRepository, [{
        key: "getAttributeData",
        value: function getAttributeData(attributeName) {
            var hasAttributeData = this.gillModelAttributeDataCache.hasAttributeData(attributeName);
            var attributeData = void 0;
            if (hasAttributeData) {
                attributeData = this.gillModelAttributeDataCache.getAttributeData(attributeName);
            } else {
                attributeData = this.gillModelAttributeDataFactory.construct(
                //TODO Do not hardcode?
                [], //TODO Should there be a collection here? The starting data
                false, // Whether or not the data has changed since last buffer
                true, // Whether or not the data is normalized
                0, // The span between the start of each attribute value
                0 // The starting index for the first attribute value
                );
                this.gillModelAttributeDataCache.setAttributeData(attributeName, attributeData);
            }
            return attributeData;
        }
    }]);

    return StandardGillModelAttributeDataRepository;
}();

exports.default = StandardGillModelAttributeDataRepository;