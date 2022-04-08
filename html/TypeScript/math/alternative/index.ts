import { fig_Instance } from "./fig_instance";
import { FIGURE } from "../FIGURE";
import { Triangle } from "../Triangle";
import { Operable } from "../Operable";

// @ts-ignore
class index<T extends Operable>{

    public Area(fig: fig_Instance) : number{
        if (fig.getFigure() == FIGURE.TRIANGLE){
            return (fig.getHeight()*fig.getWidth()) /2;
        }

        return fig.getHeight()*fig.getWidth();
    }

    public Area2(fig : T):number {
        if(fig instanceof Triangle){
            return (fig.getHeight()*fig.getWidth()) /2;
        }
        return fig.getHeight()*fig.getWidth();
    }
    

}