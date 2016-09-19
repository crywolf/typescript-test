import {StateCollection} from "./StateCollection";
export abstract class State {

    constructor(protected states: StateCollection){

    }

    abstract getName(): string;  //TODO: can this be somehow STATIC?

    static getType(): string {
        return "ABSTRACt_STATE - you should not see this";
    } //TODO: can this be enforced and inherited?

}
