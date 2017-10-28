"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.distinct = function distinct(comparer) {
    var result = [];
    var comp = comparer || {
        equals: function (x, y) { return x === y; }
    };
    for (var i = 0; this.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (comp.equals(this[i], result[i])) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(this[i]);
        }
    }
    return this;
};

//# sourceMappingURL=Array.Distinct.js.map
