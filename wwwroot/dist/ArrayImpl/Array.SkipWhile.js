Array.prototype.skipWhile = function () {
    var predicate = arguments.length > 0 ? arguments[0] : null;
    if (predicate == null) {
        throw new Error("'predicate' cannot be null.");
    }
    var start = -1;
    for (var i = 0; i < this.length && start < 0; i++) {
        if (!predicate(this[i], i)) {
            start = i;
        }
    }
    var result = [];
    for (var i = start; i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
};

//# sourceMappingURL=Array.SkipWhile.js.map
