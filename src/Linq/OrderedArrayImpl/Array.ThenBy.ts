﻿import { AscendingSorter } from "../Sorter"
import { OrderedArray } from "../OrderedArray"

Array.prototype["thenBy"] = function (): OrderedArray<any> {

	var keySelector = arguments.length > 0 ? arguments[0] : null;
	var comparer = arguments.length > 1 ? arguments[1] : null;

	if (keySelector == null) {
		throw new Error("'keySelector' cannot be null.");
	}

	var prevSorter = this["__sorter"];
	var currSorter = new AscendingSorter(keySelector, comparer);
	var result = [];

	if (this.length > 0) {
		var grp = [this[0]];
		var idx = 1;

		while (idx < this.length) {
			if (grp.length > 0 && prevSorter.sort(grp[grp.length - 1], this[idx]) !== 0) {
				var tmp = grp.sort((a, b) => currSorter.sort(a, b))
				for (var i = 0; i < tmp.length; i++) {
					result.push(tmp[i]);
				}
				grp.length = 0;	
			}

			grp.push(this[idx]);
			idx++;
		}

		var tmp = grp.sort((a, b) => currSorter.sort(a, b))
		for (var i = 0; i < tmp.length; i++) {
			result.push(tmp[i]);
		}
	}

	result["__sorter"] = currSorter;

	return <any>result;
}
