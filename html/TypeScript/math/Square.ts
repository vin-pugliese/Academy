import { FIGURE } from "./FIGURE";
import { Operable } from "./Operable";

// @ts-ignore
class Square extends Operable{
    figure: FIGURE;
    width: number;

    constructor(width:number){
        super();
        this.figure = FIGURE.SQUARE
        this.width = width;
    }

    public getFigure():FIGURE{
        return this.figure;
    }

    public getWidth() : number{
        return this.width;
    }
}

export {Square};