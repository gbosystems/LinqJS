Array.prototype.take = function (count: number) : Array<any> {
	var result = [];

	if (count > this.length) {
		count = this.length;
	}

	for(var i = 0; i < count; i++) {
		result.push(this[i]);
	}

	return result;
}
