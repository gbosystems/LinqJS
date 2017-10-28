Array.prototype.any = function (predicate?: (obj: any) => boolean): any {

	if (predicate == null) {
		return this.length > 0;
	}

	for (var i = 0; i < this.length; i++) {
		if (predicate(this[i])) {
			return true;
		}
	}

	return false;
};