import {BaseEventManager} from '../Events/Managers/BaseEventManager';
import {EventManager} from '../Events/Managers/EventManager';

export class Environment {

    private eventManager: EventManager = new BaseEventManager();

    constructor(eventManager?) {
        if (eventManager) {
            this.setEventManager(eventManager);
        }
    }

    public fireEvent(source, event) {
        this.eventManager.fireEvent(source, event);
    }

    public setEventManager(eventManager) {
        this.eventManager = eventManager;
    }

    public getEventsProduced() {
        return this.eventManager.getEvents();
    }

    public getLastEvent() {
        let events = this.eventManager.getEvents();
        return events[events.length - 1];
    }

    public reset() {
        this.eventManager.reset();
    }

}
