import { BaseLogger } from "./logger";

export class ElasticLogger extends BaseLogger{
    constructor() {
        const name = "Elastic";
        super(name);
      }
      
      logDatabase(log) {
        console.log("Logged to Elastic" ,log);
    }
}

