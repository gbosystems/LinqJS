Array.prototype.any = function (predicate) {
    if (predicate == null) {
        return this.length > 0;
    }
    for (var i = 0; i < this.length; i++) {
        if (predicate(this[i])) {
            return true;
        }
    }
    return false;
};

//# sourceMappingURL=Array.Any.js.map
