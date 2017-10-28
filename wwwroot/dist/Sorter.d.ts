import { IComparer } from "./IComparer";
export declare class Sorter<T, TKey> {
    private _keySelector;
    private _comparer?;
    constructor(keySelector: (item: T) => TKey, comparer?: IComparer<TKey>);
    sort(a: T, b: T): number;
}
export declare class AscendingSorter<T, TKey> extends Sorter<T, TKey> {
}
export declare class DescendingSorter<T, TKey> extends Sorter<T, TKey> {
    sort(a: T, b: T): number;
}
