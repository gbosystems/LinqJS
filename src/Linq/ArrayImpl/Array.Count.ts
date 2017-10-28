Array.prototype.count = function (predicate?: (obj: any) => boolean): any {
	if (predicate) {
		return this.filter(predicate).length;
	} else {
		return this.length;
	}
};