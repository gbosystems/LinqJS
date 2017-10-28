Array.prototype.elementAtOrDefault = function (index: number): any {

	if (index < 0 || index >= this.length) {
		return null;
	}

	return this[index];
}