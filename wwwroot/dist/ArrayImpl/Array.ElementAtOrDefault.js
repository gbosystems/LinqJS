Array.prototype.elementAtOrDefault = function (index) {
    if (index < 0 || index >= this.length) {
        return null;
    }
    return this[index];
};

//# sourceMappingURL=Array.ElementAtOrDefault.js.map
