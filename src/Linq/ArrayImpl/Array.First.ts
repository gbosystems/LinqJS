Array.prototype.first = function (predicate?: (obj: any) => boolean): any {
	var result = this.firstOrDefault(predicate);

	if (result == null) {
		throw new Error("Sequence contains no elements.");
	}

	return result;
};
