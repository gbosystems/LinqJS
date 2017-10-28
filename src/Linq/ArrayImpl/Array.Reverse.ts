Array.prototype.reverse = function() : Array<any> {
	var result = [];

	for (var i = this.length - 1; i >= 0; i--) {
		result.push(this[i]);
	}

	return result;
}