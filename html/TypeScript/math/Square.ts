import { FIGURE } from "./FIGURE";

class Square{
    figure: FIGURE;
    width: number;

    constructor(width:number){
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

