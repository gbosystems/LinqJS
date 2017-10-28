"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("../Sorter");
Array.prototype.orderBy = function () {
    var keySelector = arguments.length > 0 ? arguments[0] : null;
    var comparer = arguments.length > 1 ? arguments[1] : null;
    if (keySelector == null) {
        throw new Error("'keySelector' cannot be null.");
    }
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(this[i]);
    }
    var sorter = new Sorter_1.AscendingSorter(keySelector, comparer);
    result = result.sort(function (a, b) { return sorter.sort(a, b); });
    result["__sorter"] = sorter;
    return result;
};

//# sourceMappingURL=Array.OrderBy.js.map
