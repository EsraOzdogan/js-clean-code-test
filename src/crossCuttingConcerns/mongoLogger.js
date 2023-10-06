import { BaseLogger } from "./logger";

export class MongoLogger extends BaseLogger{
    constructor() {
        const name = "Mongo";
        super(name);
      }

      logDatabase(log) {
        console.log("Logged to Mongo", log);
    }
}
