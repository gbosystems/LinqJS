Array.prototype.defaultIfEmpty = function (defaultValue) {
    if (this.length === 0) {
        if (defaultValue) {
            return [defaultValue];
        }
        return [null];
    }
    return this;
};

//# sourceMappingURL=Array.DefaultIfEmpty.js.map
