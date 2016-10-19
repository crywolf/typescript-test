import {EventManager} from './EventManager';

export class BaseEventManager extends EventManager { // decorator;

    public fireEvent(source, event) {
        event.setSource(source);
        this.next(source, event);
    }

}
