// @ts-ignore
var fig_Instance = /** @class */ (function () {
    function fig_Instance(fig, width, height) {
        this.figure = fig;
        this.width = width;
        this.height = height;
    }
    fig_Instance.prototype.getFigure = function () {
        return this.figure;
    };
    fig_Instance.prototype.getWidth = function () {
        return this.width;
    };
    fig_Instance.prototype.getHeight = function () {
        return this.height;
    };
    return fig_Instance;
}());
export { fig_Instance };
