"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.innerJoin = function (inner, outerKeySelector, innerKeySelector, resultSelector, comparer) {
    inner = inner || [];
    outerKeySelector = outerKeySelector || (function (x) { return x; });
    innerKeySelector = innerKeySelector || (function (x) { return x; });
    resultSelector = resultSelector || (function (x, y) { return { 'x': x, 'y': y }; });
    comparer = comparer || {
        equals: function (x, y) { return x == y; },
        getHashCode: function (x) { return 0; }
    };
    var outerKeys = [];
    var innerKeys = [];
    var getOuterKey = function (index) {
        if (outerKeys[index]) {
            return outerKeys[index];
        }
        outerKeys[index] = outerKeySelector(this[index]);
        return outerKeys[index];
    };
    var getInnerKey = function (index) {
        if (innerKeys[index]) {
            return innerKeys[index];
        }
        innerKeys[index] = innerKeySelector(this[index]);
        return innerKeys[index];
    };
    for (var i = 0; i < this.length; i++) {
    }
    return [];
};

//# sourceMappingURL=Array.InnerJoin.js.map
