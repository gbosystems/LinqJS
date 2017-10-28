import { IEqualityComparer } from "../IEqualityComparer";

// Returns distinct elements from a sequence.
Array.prototype.contains = function distinct(value: any, comparer?: IEqualityComparer<any>): boolean {

	comparer = comparer || {
		equals: (x, y) => x == y,
		getHashCode: (x) => 0
	}

	for (var i = 0; i < this.length; i++) {
		if (comparer.equals(value, this[i])) {
			return true;
		}
	}

	return false;
};
