import { FIGURE } from "./FIGURE";
import { Operable } from "./Operable";

// @ts-ignore
class Rectangle extends Operable{
    figure: FIGURE;
    width: number;
    height: number;

    constructor(width:number, height:number){
        super();
        this.figure = FIGURE.RECTANGLE
        this.width = width;
        this.height = height;
    }

    public getFigure():FIGURE{
        return this.figure;
    }

    public getWidth() : number{
        return this.width;
    }

    public getHeight() : number{
        return this.height;
    }
}

export {Rectangle};