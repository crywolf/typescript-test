import {Event} from '../Events/Event';
import {Environment} from '../Environment/Environment';

export abstract class Entity {

    private environment = new Environment();

    constructor(private id: string) {
    }

    public toString(): string {
        return (<any> this).constructor.name + '#' + this.id;
    }

    public fireEvent(event: Event) {
        this.environment.fireEvent(this, event);
    }

    public getEnvironment() {
        return this.environment;
    }

    public setEnvironment(environment) {
        this.environment = environment;
    }
}
