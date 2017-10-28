import { IEqualityComparer } from "../IEqualityComparer";

Array.prototype.innerJoin = function (
	inner: Array<any>,
	outerKeySelector: (item: any) => any,
	innerKeySelector: (item: any) => any,
	resultSelector: (outer: any, inner: any) => any,
	comparer?: IEqualityComparer<any>): Array<any> {

	inner = inner || [];
	outerKeySelector = outerKeySelector || ((x) => x);
	innerKeySelector = innerKeySelector || ((x) => x);
	resultSelector = resultSelector || ((x, y) => { return { 'x': x, 'y': y }; });
	comparer = comparer || {
		equals: (x, y) => x == y,
		getHashCode: x => 0
	};

	// There is no matching one, neither show up in the result

	var outerKeys = [];
	var innerKeys = [];

	var getOuterKey = function(index) {
		if (outerKeys[index]) {
			return outerKeys[index];
		}

		outerKeys[index] = outerKeySelector(this[index]);

		return outerKeys[index];
	}

	var getInnerKey = function (index) {
		if (innerKeys[index]) {
			return innerKeys[index];
		}

		innerKeys[index] = innerKeySelector(this[index]);

		return innerKeys[index];
	}


	for (var i = 0; i < this.length; i++) {



	}






	return [];
};