Array.prototype.single = function (predicate?: (obj: any) => boolean): any {
	var result = this.singleOrDefault(predicate);

	if (result == null) {
		if (predicate) {
			throw new Error("The source sequence is empty.");
		} else {
			throw new Error("The input sequence is empty.");
		}
	}

	return result;
};