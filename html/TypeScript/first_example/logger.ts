// @ts-ignore
enum LEVEL {
    INFO, WARN, ERROR
}

// @ts-ignore
class Logger {

    private name: string;
    private level: LEVEL;



    constructor(name: string, level: LEVEL) {
        this.name = name;
        this.level = level;
    }

    public getName() :string {
        return this.name
    }
    
    public getLevel() :LEVEL{
        return this.level
    }

   
    public setName(name : string) :void{
        this.name = name;
    }

    public setLevel(level : LEVEL) :void{
        this.level = level;
    }
    

}