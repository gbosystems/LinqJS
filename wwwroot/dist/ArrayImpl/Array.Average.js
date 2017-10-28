Array.prototype.average = function (selector) {
    selector = selector || (function (x) { return x; });
    if (this.length === 0) {
        throw new Error("'source' contains no elements.");
    }
    var total = 0;
    for (var i = 0; i < this.length; i++) {
        total += selector(this[i]);
    }
    return total / this.length;
};

//# sourceMappingURL=Array.Average.js.map
