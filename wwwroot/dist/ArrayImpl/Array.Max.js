Array.prototype.max = function (selector) {
    selector = selector || (function (x) { return x; });
    if (this.length === 0) {
        throw new Error("'source' contains no elements.");
    }
    var max = this[0];
    for (var i = 1; i < this.length; i++) {
        var item = selector(this[i]);
        if (item > max) {
            max = item;
        }
    }
    return max;
};

//# sourceMappingURL=Array.Max.js.map
