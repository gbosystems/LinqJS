Array.prototype.intersect = function () {
    var second = arguments.length > 0 ? arguments[0] : [];
    var comparer = arguments.length > 1
        ? arguments[1]
        : {
            equals: function (x, y) { return x == y; }
        };
    var result = [];
    var i = 0;
    while (i < this.length) {
        var j = 0;
        var found = false;
        while (j < second.length && !found) {
            if (comparer.equals(this[i], second[j])) {
                found = true;
            }
            j++;
        }
        if (found) {
            result.push(this[i]);
        }
        i++;
    }
    return result;
};

//# sourceMappingURL=Array.Intersect.js.map
