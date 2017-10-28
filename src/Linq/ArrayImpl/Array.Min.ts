Array.prototype.min = function (selector?: (value: any) => number): any {
	selector = selector || ((x) => x);

	if (this.length === 0) {
		throw new Error("'source' contains no elements.");
	}
	
	var min = this[0];

	for (var i = 1; i < this.length; i++) {
		var item = selector(this[i]);
		if (item < min) {
			min = item;
		}
	}

	return min;
};