Array.prototype.selectMany = function () {
    var collectionSelector = arguments.length > 0 ? arguments[0] : null;
    var resultSelector = arguments.length > 1 ? arguments[1] : function (s, c) { return c; };
    if (collectionSelector == null) {
        throw new Error("'collectionSelector' cannot be null.");
    }
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var collection = collectionSelector(this[i], i);
        for (var j = 0; j < collection.length; j++) {
            result.push(resultSelector(this[i], collection[j]));
        }
    }
    return result;
};

//# sourceMappingURL=Array.SelectMany.js.map
