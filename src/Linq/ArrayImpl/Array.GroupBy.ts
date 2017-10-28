
// Groups the elements of a sequence according to a specified key selector function.
Array.prototype.groupBy = function() {

	/* Assign parameters */
	var keySelector = arguments.length > 0 ? arguments[0] : x => x;
	var comparer = {
		equals: (x, y) => x == y
	};
	var elementSelector = x => x;
	var resultSelector = (key, collection) => {
		collection.key = key;
		return collection;
	} 

	if (arguments.length === 2) {
		if (typeof(arguments[1]) === "object") {
			comparer = arguments[1];
		} else {
			elementSelector = arguments[1];
		}
	}

	if (arguments.length === 3) {
		elementSelector = arguments[1];

		if (typeof (arguments[2]) === "object") {
			comparer = arguments[2];
		} else {
			resultSelector = arguments[2];
		}
	}

	if (arguments.length === 4) {
		elementSelector = arguments[1];
		resultSelector = arguments[2];
		comparer = arguments[3];
	}

	/* Perform grouping */
	var groups = [];

	var getKeyPosition = (key) => {
		for (var i = 0; i < groups.length; i++) {
			if (comparer.equals(groups[i].key, key)) {
				return i;
			}
		}
		return -1;
	}

	for (var i = 0; i < this.length; i++) {
		var key = keySelector(this[i]);
		var element = elementSelector(this[i]);
		var index = getKeyPosition(key);
		
		if (index >= 0) {
			groups[index].push(element);
		} else {
			var group = [];
			(<any>group).key = key;
			(<any>group).push(element);

			groups.push(group);
		}
	}

	/* Project results */
	var projectedResults = [];
	for (var i = 0; i < groups.length; i++) {
		projectedResults.push(resultSelector(groups[i].key,  groups[i]));
	}

	return projectedResults;
}
