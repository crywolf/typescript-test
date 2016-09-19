import {BaseEventManager} from "../Events/Managers/BaseEventManager";
import {EventManager} from "../Events/Managers/EventManager";

export class Environment {

    private eventManager: EventManager = new BaseEventManager();

    constructor(eventManager?) {
        if (eventManager) {
            this.setEventManager(eventManager);
        }
    }

    fireEvent(source, event)  {
        this.eventManager.fireEvent(source, event);
    }

    setEventManager(eventManager) {
        this.eventManager = eventManager;
    }

    getEventsProduced() {
        return this.eventManager.getEvents();
    }

    getLastEvent() {
        let events = this.eventManager.getEvents();
        return events[events.length - 1];
    }

    reset() {
        this.eventManager.reset();
    }

}
