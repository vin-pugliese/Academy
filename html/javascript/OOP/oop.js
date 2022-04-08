

class Loggr {

    name = new String;
    data = new Date();

    constructor(){}

    /**
     * 
     * @param {*} name 
     * @param {*} data 
     */
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    setup(...options){
        [...options].forEach(o => {
            //TODO
        })
    }

    /**
     * 
     * @param {*} message 
     */
    info(message) {
        console.info(Message);
    }

    /**
     * 
     * @param {*} message 
     */
    debug(message) {
        console.debug(Message);
    }

    /**
     * 
     * @param {*} message 
     */
    warn(message) {
        console.warn(Message);
    }

    /**
     * 
     * @param {*} message 
     */
    error(message) {
        console.error(Message);
    }



}
