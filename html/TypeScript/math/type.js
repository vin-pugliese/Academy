"use strict";
exports.__esModule = true;
var type = /** @class */ (function () {
    function type() {
    }
    type.prototype.squareArea = function (square) {
        this.width = square.getWidth();
        return this.width * this.width;
    };
    type.prototype.rectangleArea = function (rect) {
        this.width = rect.getWidth();
        this.height = rect.getHeight();
        return this.width * this.height;
    };
    type.prototype.triangleArea = function (tr) {
        this.width = tr.getWidth();
        this.height = tr.getHeight();
        return (this.width * this.height) / 2;
    };
    return type;
}());
