Array.prototype.skip = function (count: number) {
	var result = [];

	for (var i = count; i < this.length; i++) {
		result.push(this[i]);
	}

	return this.filter(result);
}
