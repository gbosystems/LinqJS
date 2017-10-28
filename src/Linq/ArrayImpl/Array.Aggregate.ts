Array.prototype.aggregate = function (): any {

	var arg1 = arguments.length > 0 ? arguments[0] : null;
	var arg2 = arguments.length > 1 ? arguments[1] : null;
	var arg3 = arguments.length > 2 ? arguments[2] : null;

	var seed: any = null;
	var func: (accumulated: any, next: any) => any = null;
	var selc: (accumulated: any) => any = null;

	if (arguments.length > 1) {
		seed = arg1;
		func = arg2;
		selc = arg3;
	} else {
		func = arg1;
	}

	var accumulated: any;

	if (seed != null || this.length > 1) {
		var start;

		if (seed == null) {
			start = 1;
			accumulated = this[0];
		} else {
			start = 0;
			accumulated = seed;
		}

		for (var i = start; i < this.length; i++) {
			accumulated = func(accumulated, this[i]);
		}
	} else if (this.length === 1) {
		accumulated = this[0];
	} else {
		throw new Error("Sequence contains no elements");
	}

	if (selc != null) {
		return selc(accumulated);
	} else {
		return accumulated;
	}
};