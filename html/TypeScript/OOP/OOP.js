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
var IRunner = /** @class */ (function () {
    function IRunner(name) {
        this.name = name;
    }
    return IRunner;
}());
var IRunnerImpl = /** @class */ (function (_super) {
    __extends(IRunnerImpl, _super);
    function IRunnerImpl(name) {
        return _super.call(this, name) || this;
    }
    IRunnerImpl.prototype.print = function () {
        throw new Error("Method not implemented.");
    };
    IRunnerImpl.prototype.set = function () {
        throw new Error("Method not implemented.");
    };
    return IRunnerImpl;
}(IRunner));
var PrinterOut = /** @class */ (function () {
    function PrinterOut() {
    }
    PrinterOut.prototype.print = function (param, param1) {
        throw new Error("Method not implemented.");
    };
    PrinterOut.prototype.start = function (param1, param2, param3) {
        throw new Error("Method not implemented.");
    };
    return PrinterOut;
}());
var t = null;
