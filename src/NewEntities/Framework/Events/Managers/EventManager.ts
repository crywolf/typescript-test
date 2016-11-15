import {Entity} from '../../Entity/Entity';
import {Event} from '../Event';

export abstract class EventManager {

    protected events: Array<Event> = [];

    constructor(private parent?: EventManager) {
    }

    public decorate(decoratorConstructor: typeof EventManager) {
        return new (<any> decoratorConstructor)(this); // TODO: get rid of <any>
    }

    public getEvents() {
        return this.events; // better return copy!
    }

    public reset() {
        this.events = [];
    }

    public abstract fireEvent(source: Entity, event: Event);

    protected next(source: Entity, event: Event) {
        if (this.parent) {
            this.parent.fireEvent(source, event);
        }
    }

}
