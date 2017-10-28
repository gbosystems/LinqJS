Array.prototype.defaultIfEmpty = function (defaultValue?: any): Array<any> {
	if (this.length === 0) {
		if (defaultValue) {
			return [ defaultValue ];
		}

		return [ null ];
	}

	return this;
};