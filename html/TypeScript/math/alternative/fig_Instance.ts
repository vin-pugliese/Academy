import { FIGURE } from "../FIGURE";

// @ts-ignore
class fig_Instance{
    figure: FIGURE;
    width: number;
    height: number;

    constructor(fig: FIGURE, width:number, height:number){
        this.figure = fig;
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

export{fig_Instance};