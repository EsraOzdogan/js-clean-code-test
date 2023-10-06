export class BaseLogger{
    constructor(name){
        this.__name = name;
    }

    logDatabase(log){
        throw new Error("Not logged.");
    }

}


