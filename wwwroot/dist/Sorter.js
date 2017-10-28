"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = (function () {
    function Sorter(keySelector, comparer) {
        this._keySelector = keySelector;
        this._comparer = comparer;
    }
    Sorter.prototype.sort = function (a, b) {
        var aKey = this._keySelector(a);
        var bKey = this._keySelector(b);
        var aType = typeof (aKey);
        var bType = typeof (bKey);
        if (this._comparer != null) {
            return this._comparer.compare(aKey, bKey);
        }
        if (aType === "string" && bType === "string") {
            return aKey.localeCompare(bKey);
        }
        if (aType === "number" && bType === "number") {
            return aKey - bKey;
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
    };
    return Sorter;
}());
exports.Sorter = Sorter;
var AscendingSorter = (function (_super) {
    __extends(AscendingSorter, _super);
    function AscendingSorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AscendingSorter;
}(Sorter));
exports.AscendingSorter = AscendingSorter;
var DescendingSorter = (function (_super) {
    __extends(DescendingSorter, _super);
    function DescendingSorter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescendingSorter.prototype.sort = function (a, b) {
        return _super.prototype.sort.call(this, a, b) * -1;
    };
    return DescendingSorter;
}(Sorter));
exports.DescendingSorter = DescendingSorter;

//# sourceMappingURL=Sorter.js.map
