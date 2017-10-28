Array.prototype.singleOrDefault = function (predicate) {
    var result;
    if (predicate) {
        result = [];
        for (var i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                result.push(this[i]);
                if (result.length > 1) {
                    throw Error("More than one element satisfies the condition in predicate.");
                }
            }
        }
    }
    else {
        result = this;
    }
    if (result.length === 0) {
        return null;
    }
    else if (result.length > 1) {
        throw new Error("The input sequence contains more than one element.");
    }
    else {
        return result[0];
    }
};

//# sourceMappingURL=Array.SingleOrDefault.js.map
