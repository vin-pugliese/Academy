import { FIGURE } from "../FIGURE";
import { Triangle } from "../Triangle";
// @ts-ignore
var index = /** @class */ (function () {
    function index() {
    }
    index.prototype.Area = function (fig) {
        if (fig.getFigure() == FIGURE.TRIANGLE) {
            return (fig.getHeight() * fig.getWidth()) / 2;
        }
        return fig.getHeight() * fig.getWidth();
    };
    index.prototype.Area2 = function (fig) {
        if (fig instanceof Triangle) {
            return (fig.getHeight() * fig.getWidth()) / 2;
        }
        return fig.getHeight() * fig.getWidth();
    };
    return index;
}());
