import { AscendingSorter } from "../Sorter";
import { OrderedArray } from "../OrderedArray";

Array.prototype.orderBy = function (): OrderedArray<any> {
	var keySelector = arguments.length > 0 ? arguments[0] : null;
	var comparer = arguments.length > 1 ? arguments[1] : null;

	if (keySelector == null) {
		throw new Error("'keySelector' cannot be null.");
	}

	var result = [];

	for (var i = 0; i < this.length; i++) {
		result.push(this[i]);
	}
	
	var sorter = new AscendingSorter(keySelector, comparer);

	result = result.sort((a, b) => sorter.sort(a,b));
	result["__sorter"] = sorter;

	return <any>result;
}
