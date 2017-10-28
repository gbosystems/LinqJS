Array.prototype.where = function (predicate: (obj: any) => boolean): Array<any> {

	if (predicate == null) {
		throw new Error("'predicate' must not be null");
	}

	return this.filter(predicate);
};