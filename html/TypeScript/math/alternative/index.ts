import { fig_Instance } from "./fig_instance";
import { FIGURE } from "../FIGURE";

class index{


    public Area(sq : FIGURE.SQUARE, fig: fig_Instance) : number{
        return fig.getHeight()*fig.getWidth();
    }

   // public Area(re : FIGURE.RECTANGLE, fig: fig_Instance) : number{
        
    //}

}