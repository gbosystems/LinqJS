Array.prototype.firstOrDefault = function (predicate?: (obj: any) => boolean): any {
	if (this.length === 0) {
		return null;
	}

	if (predicate) {
		for (var i = 0; i < this.length; i++) {
			if (predicate(this[i])) {
				return this[i];
			}
		}
	} else {
		return this[0];
	}

	return null;
};