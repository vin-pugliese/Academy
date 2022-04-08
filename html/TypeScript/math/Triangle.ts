import { FIGURE } from "./FIGURE";
import { Operable } from "./Operable";

// @ts-ignore
class Triangle extends Operable{
    figure: FIGURE;
    width: number;
    height: number;

    constructor(width:number, height:number){
        super();
        this.figure = FIGURE.TRIANGLE
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

export {Triangle};