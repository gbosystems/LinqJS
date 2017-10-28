"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.contains = function distinct(value, comparer) {
    comparer = comparer || {
        equals: function (x, y) { return x == y; },
        getHashCode: function (x) { return 0; }
    };
    for (var i = 0; i < this.length; i++) {
        if (comparer.equals(value, this[i])) {
            return true;
        }
    }
    return false;
};

//# sourceMappingURL=Array.Contains.js.map
