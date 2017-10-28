Array.prototype.count = function (predicate) {
    if (predicate) {
        return this.filter(predicate).length;
    }
    else {
        return this.length;
    }
};

//# sourceMappingURL=Array.Count.js.map
