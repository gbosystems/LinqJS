import { IComparer } from "./IComparer";

export interface OrderedArray<T> extends Array<T> {
	// ThenBy
	thenBy<TKey>(keySelector: (item: T) => TKey): OrderedArray<T>;
	thenBy<TKey>(keySelector: (item: T) => TKey, comparer: IComparer<TKey>): OrderedArray<T>;

	// ThenByDescending
	thenByDescending<TKey>(keySelector: (item: T) => TKey): OrderedArray<T>;
	thenByDescending<TKey>(keySelector: (item: T) => TKey, comparer: IComparer<TKey>): OrderedArray<T>;
}