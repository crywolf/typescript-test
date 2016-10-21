import {Event} from '../Event';
import {Entity} from '../../Entity/Entity';
import {EventManager} from './EventManager';

/* tslint:disable:no-console */

export class LoggingEventManager extends EventManager { // decorator;

    public fireEvent(source: Entity, event: Event) {
        console.log(`Entity ${source} fired event ${event.getTypeName()}`);
        this.next(source, event);
    }
}
