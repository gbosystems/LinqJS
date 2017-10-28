Array.prototype.where = function (predicate) {
    if (predicate == null) {
        throw new Error("'predicate' must not be null");
    }
    return this.filter(predicate);
};

//# sourceMappingURL=Array.Where.js.map
