import {Event} from "../Events/Event";
import {Environment} from "../Environment/Environment";

export abstract class Entity {

    private environment = new Environment();

    constructor(private id:string) {
    }

    toString(): string {
        return (<any>this).constructor.name + '#' + this.id;
    }

    fireEvent(event: Event) {
        this.environment.fireEvent(this, event);
    }

    getEnvironment () {
        return this.environment;
    }

    setEnvironment (environment) {
        this.environment = environment;
    }
}