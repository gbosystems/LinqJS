import { IComparer } from "./IComparer";
import { IEqualityComparer } from "./IEqualityComparer";
import { IGrouping } from "./IGrouping";
import { OrderedArray } from "./OrderedArray";

export {};

declare global {
	interface Array<T> {

		// Aggregate
		aggregate( func : (accumulated: T, next: T) => T ): T;

		aggregate<TAccumulate>(
			seed: TAccumulate,
			func: (accumulated: TAccumulate, next: T) => TAccumulate): TAccumulate;

		aggregate<TAccumulate, TResult>(
			seed: TAccumulate,
			func: (accumulated: TAccumulate, next: T) => TAccumulate,
			resultSelector: (accumulated: T) => TResult): TResult;

		// All
		all(predicate: (obj: T) => boolean): boolean;

		// Any
		any(): boolean;
		any(predicate: (obj: T) => boolean): boolean;

		// Average
		average(): number;	
		average(selector: (value: T) => number): number;

		// Cast
		cast<TOut>(): Array<TOut>;

		// Concat
		concat(second: Array<T>): Array<T>;

		// Contains
		contains(value: T): boolean;
		contains(value: T, comparer: IEqualityComparer<T>): boolean;

		// Count
		count(): number;
		count(predicate: (obj: T) => boolean): number;

		// DefaultIfEmpty
		defaultIfEmpty(): Array<T>;
		defaultIfEmpty(defaultValue: T): Array<T>;

		// Distinct
		distinct(): Array<any>;
		distinct(comparer: IEqualityComparer<T>): Array<T>;

		// ElementAt
		elementAt(index: number) : T;

		// ElementAtOrDefault
		elementAtOrDefault(index: number): T;

		// Empty
		empty(): Array<T>;

		// Except
		except(second: Array<T>): Array<T>;
		except(second: Array<T>, comparer: IEqualityComparer<T>): Array<T>;
	
		// First
		first(): T;
		first(predicate: (obj: T) => boolean): T;

		// FirstOrDefault
		firstOrDefault(): T;
		firstOrDefault(predicate: (obj: T) => boolean): T;

		// GroupBy
		groupBy<TKey>(
			keySelector: (item: T) => TKey): Array<IGrouping<TKey, T>>;

		groupBy<TKey>(
			keySelector: (item: T) => TKey,
			comparer: IEqualityComparer<TKey>): Array<IGrouping<TKey, T>>;

		groupBy<TKey,  TElement>(
			keySelector: (item: T) => TKey,
			elementSelector: (item: T) => TElement): Array<IGrouping<TKey,  TElement>>;

		groupBy<TKey, TElement>(
			keySelector: (item: T) => TKey,
			elementSelector: (item: T) => TElement,
			comparer: IEqualityComparer<TKey>): Array<IGrouping<TKey, TElement>>;

		groupBy<TKey, TElement, TResult>(
			keySelector: (item: T) => TKey,
			elementSelector: (item: T) => TElement,
			resultSelector: (key: TKey, collection: Array<TElement>) => TResult): Array<TResult>;

		groupBy<TKey, TElement, TResult>(
			keySelector: (item: T) => TKey,
			elementSelector: (item: T) => TElement,
			resultSelector: (key: TKey, collection: Array<TElement>) => TResult,
			comparer: IEqualityComparer<TKey>): Array<TResult>;

		// GroupJoin
		groupJoin<TInner, TKey, TResult>(
			inner: Array<TInner>,
			outerKeySelector: (item: T) => TKey,
			innerKeySelector: (item: TInner) => TKey,
			resultSelector: (key: T, collection: Array<TInner>) => TResult): Array<TResult>;

		groupJoin<TInner, TKey, TResult>(
			inner: Array<TInner>,
			outerKeySelector: (item: T) => TKey,
			innerKeySelector: (item: TInner) => TKey,
			resultSelector: (key: T, collection: Array<TInner>) => TResult,
			comparer: IEqualityComparer<TKey>): Array<TResult>;

		// Intersect
		intersect(second: Array<T>): Array<T>;
		intersect(second: Array<T>, comparer: IEqualityComparer<T>): Array<T>;

		// Join
		innerJoin<TInner, TKey, TResult>(
			inner: Array<TInner>,
			outerKeySelector: (item: T) => TKey,
			innerKeySelector: (item: TInner) => TKey,
			resultSelector: (outer: T, inner: TInner) => TResult): Array<TResult>;

		innerJoin<TInner, TKey, TResult>(
			inner: Array<TInner>,
			outerKeySelector: (item: T) => TKey,
			innerKeySelector: (item: TInner) => TKey,
			resultSelector: (outer: T, inner: TInner) => TResult,
			comparer: IEqualityComparer<TKey>): Array<TResult>;

		// Last
		last(): T;
		last(predicate: (obj: T) => boolean): T;

		// LastOrDefault
		lastOrDefault(): T;
		lastOrDefault(predicate: (obj: T) => boolean): T;

		// Max
		max(): number;
		max(selector: (value: T) => number): number;

		// Min
		min(): number;
		min(selector: (value: T) => number): number;

		// OfType

		// OrderBy
		orderBy<TKey>(keySelector: (item: T) => TKey): OrderedArray<T>;
		orderBy<TKey>(keySelector: (item: T) => TKey, comparer: IComparer<TKey>): OrderedArray<T>;

		// OrderByDescending
		orderByDescending<TKey>(keySelector: (item: T) => TKey): OrderedArray<T>;
		orderByDescending<TKey>(keySelector: (item: T) => TKey, comparer: IComparer<TKey>): OrderedArray<T>;

		// Reverse
		reverse(): Array<T>;

		// Select
		select<TResult>(selector: (item: T) => TResult): Array<TResult>;
		select<TResult>(selector: (item: T, index: number) => TResult): Array<TResult>;

		// SelectMany
		selectMany<TResult, TCollection>(collectionSelector: (item: T) => Array<TCollection>): Array<TResult>;
		selectMany<TResult, TCollection>(collectionSelector: (item: T, index: number) => Array<TCollection>): Array<TResult>;
		selectMany<TResult, TCollection>(collectionSelector: (item: T) => Array<TCollection>, resultSelector: (parent: T, item: TCollection) => TResult): Array<TResult>;
		selectMany<TResult, TCollection>(collectionSelector: (item: T, index: number) => Array<TCollection>, resultSelector: (parent: T, item: TCollection) => TResult): Array<TResult>;

		// SequenceEqual
		sequenceEqual(second: Array<T>): boolean;
		sequenceEqual(second: Array<T>, comparer: IEqualityComparer<T>): boolean;

		// Single
		single(): T;
		single(predicate: (obj: T) => boolean): T;

		// SingleOrDefault
		singleOrDefault(): T;
		singleOrDefault(predicate: (obj: T) => boolean): T;
	
		// Skip
		skip(count: number): Array<T>;

		// SkipWhile
		skipWhile(predicate: (item: T) => boolean): Array<T>;
		skipWhile(predicate: (item: T, index: number) => boolean): Array<T>;

		// Sum
		sum(): number;
		sum(selector: (value: T) => number): number;

		// Take
		take(count: number): Array<T>;

		// TakeWhile
		takeWhile(predicate: (item: T) => boolean): Array<T>;
		takeWhile(predicate: (item: T, index: number) => boolean): Array<T>;

		// Union
		union(second: Array<T>): Array<T>;
		union(second: Array<T>, comparer: IEqualityComparer<T>): Array<T>;

		// Where
		where(predicate: (obj: T) => boolean): Array<T>;
	}
}

// Implementation references

import "./ArrayImpl/Array.Aggregate";
import "./ArrayImpl/Array.All";
import "./ArrayImpl/Array.Any";
import "./ArrayImpl/Array.Average";
import "./ArrayImpl/Array.Cast";
import "./ArrayImpl/Array.Concat";
import "./ArrayImpl/Array.Contains";
import "./ArrayImpl/Array.Count";
import "./ArrayImpl/Array.DefaultIfEmpty";
import "./ArrayImpl/Array.Distinct";
import "./ArrayImpl/Array.ElementAt";
import "./ArrayImpl/Array.ElementAtOrDefault";
import "./ArrayImpl/Array.Empty";
import "./ArrayImpl/Array.Except";
import "./ArrayImpl/Array.First";
import "./ArrayImpl/Array.FirstOrDefault";
import "./ArrayImpl/Array.GroupBy";
import "./ArrayImpl/Array.InnerJoin";
import "./ArrayImpl/Array.Intersect";
import "./ArrayImpl/Array.Max";
import "./ArrayImpl/Array.Min";
import "./ArrayImpl/Array.OrderBy";
import "./ArrayImpl/Array.OrderByDescending";
import "./ArrayImpl/Array.Reverse";
import "./ArrayImpl/Array.Select";
import "./ArrayImpl/Array.SelectMany";
import "./ArrayImpl/Array.SequenceEqual";
import "./ArrayImpl/Array.Single";
import "./ArrayImpl/Array.SingleOrDefault";
import "./ArrayImpl/Array.Skip";
import "./ArrayImpl/Array.SkipWhile";
import "./ArrayImpl/Array.Sum";
import "./ArrayImpl/Array.Take";
import "./ArrayImpl/Array.TakeWhile";
import "./ArrayImpl/Array.Union";
import "./ArrayImpl/Array.Where";

import "./OrderedArrayImpl/Array.ThenBy";
import "./OrderedArrayImpl/Array.ThenByDescending";