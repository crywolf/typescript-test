import {EventManager} from "./EventManager";

export class BaseEventManager extends EventManager {                // decorator;

    fireEvent(source, event) {
            event.setSource(source);
            this.next(source,event);
    }

}

