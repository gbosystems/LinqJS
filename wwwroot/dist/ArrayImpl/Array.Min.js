Array.prototype.min = function (selector) {
    selector = selector || (function (x) { return x; });
    if (this.length === 0) {
        throw new Error("'source' contains no elements.");
    }
    var min = this[0];
    for (var i = 1; i < this.length; i++) {
        var item = selector(this[i]);
        if (item < min) {
            min = item;
        }
    }
    return min;
};

//# sourceMappingURL=Array.Min.js.map
