// Produces the set union of two sequences
Array.prototype.union = function() {
	var second = arguments.length > 0 ? arguments[0] : [];
	var comparer = arguments.length > 1
		? arguments[1]
		: {
			equals: (x, y) => x == y
			};

	var distinct = (group, array) => {
		var i = 0;
		while (i < array.length) {

			var j = 0;
			var found = false;
			while (j < group.length && !found) {
				if (comparer.equals(array[i], group[j])) {
					found = true;
				}
				j++;
			}

			if (!found) {
				group.push(array[i]);
			}
			i++;
		}
	}
		
	var result = [];

	distinct(result, this);
	distinct(result, second);

	return result;
}
