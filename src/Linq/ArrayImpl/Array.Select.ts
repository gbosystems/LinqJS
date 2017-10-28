Array.prototype.select = function() {
	var selector = arguments.length > 0 ? arguments[0] : null;

	if (selector == null) {
		throw new Error("'selector' cannot be null.");
	}

	var result = [];

	for (var i = 0; i < this.length; i++) {
		result.push(selector(this[i], i));
	}

	return result;
}
