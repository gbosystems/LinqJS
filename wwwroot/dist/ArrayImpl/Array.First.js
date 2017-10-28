Array.prototype.first = function (predicate) {
    var result = this.firstOrDefault(predicate);
    if (result == null) {
        throw new Error("Sequence contains no elements.");
    }
    return result;
};

//# sourceMappingURL=Array.First.js.map
