import { IEqualityComparer } from "../IEqualityComparer";

// Determines whether two sequences are equal by comparing the elements.
Array.prototype.sequenceEqual = function (second: Array<any>, comparer?: IEqualityComparer<any>) : boolean {
	second = second || [];
	comparer = comparer || {
		equals: (x, y) => x == y,
		getHashCode: x => 0
	};

	if (this.length !== second.length) {
		return false;
	}

	for (var i = 0; i < this.length; i++) {
		if (!comparer.equals(this[i], second[i])) {
			return false;
		}
	}

	return true;
}
