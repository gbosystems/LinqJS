// Computes the sum of a sequence of values.
Array.prototype.sum = function (selector?: (value: any) => number): any {
	selector = selector || ((x) => x);

	if (this.length === 0) {
		throw new Error("'source' contains no elements.");
	}
	
	var total = 0;
	for (var i = 0; i < this.length; i++) {
		total += selector(this[i]);
	}

	return total;
};