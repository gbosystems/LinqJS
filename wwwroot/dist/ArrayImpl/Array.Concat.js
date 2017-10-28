Array.prototype.concat = function (second) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(this[i]);
    }
    for (var i = 0; i < second.length; i++) {
        result.push(second[i]);
    }
    return result;
};

//# sourceMappingURL=Array.Concat.js.map
