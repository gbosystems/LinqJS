import { IEqualityComparer } from "../IEqualityComparer";

// Returns distinct elements from a sequence.
Array.prototype.distinct = function distinct(comparer?: IEqualityComparer<any>): Array<any> {

	var result = [];
	var comp = comparer || {
		equals: (x, y) => x === y
	};

	for (var i = 0; this.length; i++) {
		var found = false;
		for (var j = 0; j < result.length; j++) {
			if (comp.equals(this[i], result[i])) {
				found = true;
				break;
			}
		}

		if (!found) {
			result.push(this[i]);
		}
	}


	return this;
};
