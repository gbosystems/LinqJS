import { IComparer } from "./IComparer";

export class Sorter<T, TKey> {

	private _keySelector: (item: T) => TKey;
	private _comparer?: IComparer<TKey>;

	constructor(keySelector: (item: T) => TKey, comparer?: IComparer<TKey>) {
		this._keySelector = keySelector;
		this._comparer = comparer;
	}

	public sort(a: T, b: T): number {

		var aKey = this._keySelector(a);
		var bKey = this._keySelector(b);
		var aType = typeof (aKey);
		var bType = typeof (bKey);

		if (this._comparer != null) {
			return this._comparer.compare(aKey, bKey);
		}

		if (aType === "string" && bType === "string") {
			return (<any>aKey).localeCompare(<any>bKey);
		}

		if (aType === "number" && bType === "number") {
			return <any>aKey - <any>bKey;
		}

		if (aType === "undefined" && bType === "undefined") {
			return 0;
		}

		if (aType === "undefined" && bType !== "undefined") {
			return -1;
		}

		if (aType !== "undefined" && bType === "undefined") {
			return 1;
		}

		return aKey.toString().localeCompare(bKey.toString());
	}

}

export class AscendingSorter<T, TKey> extends Sorter<T, TKey> {
}

export class DescendingSorter<T, TKey> extends Sorter<T, TKey> {
	public sort(a: T, b: T): number {
		return super.sort(a, b) * -1;
	}
}
