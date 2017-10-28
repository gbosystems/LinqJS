Array.prototype.all = function (predicate: (obj: any) => boolean): any {

	if (predicate == null) {
		throw new Error("'predicate' must not be null");
	}

	for (var i = 0; i < this.length; i++) {
		if (!predicate(this[i])) {
			return false;
		}
	}

	return true;
};