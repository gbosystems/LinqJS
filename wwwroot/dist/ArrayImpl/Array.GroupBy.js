Array.prototype.groupBy = function () {
    var keySelector = arguments.length > 0 ? arguments[0] : function (x) { return x; };
    var comparer = {
        equals: function (x, y) { return x == y; }
    };
    var elementSelector = function (x) { return x; };
    var resultSelector = function (key, collection) {
        collection.key = key;
        return collection;
    };
    if (arguments.length === 2) {
        if (typeof (arguments[1]) === "object") {
            comparer = arguments[1];
        }
        else {
            elementSelector = arguments[1];
        }
    }
    if (arguments.length === 3) {
        elementSelector = arguments[1];
        if (typeof (arguments[2]) === "object") {
            comparer = arguments[2];
        }
        else {
            resultSelector = arguments[2];
        }
    }
    if (arguments.length === 4) {
        elementSelector = arguments[1];
        resultSelector = arguments[2];
        comparer = arguments[3];
    }
    var groups = [];
    var getKeyPosition = function (key) {
        for (var i = 0; i < groups.length; i++) {
            if (comparer.equals(groups[i].key, key)) {
                return i;
            }
        }
        return -1;
    };
    for (var i = 0; i < this.length; i++) {
        var key = keySelector(this[i]);
        var element = elementSelector(this[i]);
        var index = getKeyPosition(key);
        if (index >= 0) {
            groups[index].push(element);
        }
        else {
            var group = [];
            group.key = key;
            group.push(element);
            groups.push(group);
        }
    }
    var projectedResults = [];
    for (var i = 0; i < groups.length; i++) {
        projectedResults.push(resultSelector(groups[i].key, groups[i]));
    }
    return projectedResults;
};

//# sourceMappingURL=Array.GroupBy.js.map
