Array.prototype.elementAt = function (index) {
    if (index < 0 || index >= this.length) {
        throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
    }
    return this[index];
};

//# sourceMappingURL=Array.ElementAt.js.map
