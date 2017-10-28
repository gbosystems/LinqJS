import { IEqualityComparer } from "../IEqualityComparer";

// Produces the set difference of two sequences by using the specified IEqualityComparer<T> to compare values.
Array.prototype.except = function (second: Array<any>, comparer?: IEqualityComparer<any>): Array<any> {

	var comp = comparer || {
		equals: (x, y) => x === y
	};

	var a = [];
	var b = [];

	for (var i = 0; i < this.length; i++) {
		a[i] = this[i];
	}

	for (var i = 0; i < second.length; i++) {
		b[i] = second[i];
	}

	var i = 0;
	do {
		var j = 0;
		var found = false;
		do {
			if (comp.equals(a[i], b[j])) {
				b.splice(j, 1);
				found = true;
			} else {
				j++;
			}
		} while(j < b.length)

		if (found) {
			a.splice(i, 1);
		} else {
			i++;
		}
	} while(i < a.length)

	var result = a.concat(b);

	return result;
}