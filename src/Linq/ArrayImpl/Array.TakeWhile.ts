Array.prototype.takeWhile = function() {
	var predicate = arguments.length > 0 ? arguments[0] : null;

	if (predicate == null) {
		throw new Error("'predicate' cannot be null.");
	}

	var result = [];
	var i = 0;

	while (i < this.length && predicate(this[i], i)) {
		result.push(this[i]);
		i++;
	}

	return result;
}
