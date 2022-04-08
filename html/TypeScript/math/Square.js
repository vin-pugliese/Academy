var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { FIGURE } from "./FIGURE";
import { Operable } from "./Operable";
// @ts-ignore
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        var _this = _super.call(this) || this;
        _this.figure = FIGURE.SQUARE;
        _this.width = width;
        return _this;
    }
    Square.prototype.getFigure = function () {
        return this.figure;
    };
    Square.prototype.getWidth = function () {
        return this.width;
    };
    return Square;
}(Operable));
export { Square };
