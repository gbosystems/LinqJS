Array.prototype.skip = function (count) {
    var result = [];
    for (var i = count; i < this.length; i++) {
        result.push(this[i]);
    }
    return this.filter(result);
};

//# sourceMappingURL=Array.Skip.js.map
