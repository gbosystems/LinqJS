Array.prototype.take = function (count) {
    var result = [];
    if (count > this.length) {
        count = this.length;
    }
    for (var i = 0; i < count; i++) {
        result.push(this[i]);
    }
    return result;
};

//# sourceMappingURL=Array.Take.js.map
