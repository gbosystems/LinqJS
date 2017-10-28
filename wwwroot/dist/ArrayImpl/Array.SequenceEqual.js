"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.sequenceEqual = function (second, comparer) {
    second = second || [];
    comparer = comparer || {
        equals: function (x, y) { return x == y; },
        getHashCode: function (x) { return 0; }
    };
    if (this.length !== second.length) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (!comparer.equals(this[i], second[i])) {
            return false;
        }
    }
    return true;
};

//# sourceMappingURL=Array.SequenceEqual.js.map
