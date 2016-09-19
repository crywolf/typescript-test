import {Entity} from "../../Entity/Entity";
import {Event} from "../Event";

export abstract class EventManager {

    protected events: Array<Event> = [];

    constructor(private parent?:EventManager) {

    }

    protected next(source: Entity, event:Event) {
        if (this.parent) {
            this.parent.fireEvent(source,event);
        }
    }


    decorate(Decorator: typeof EventManager) {
        return new (<any>Decorator)(this); //TODO: get rid of <any>
    }

    getEvents() {
        return this.events; // better return copy!
    }

    reset() {
        this.events = [];
    }

    abstract fireEvent(source:Entity, event:Event);
}
