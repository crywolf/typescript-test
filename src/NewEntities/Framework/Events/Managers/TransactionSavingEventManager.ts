import {Event} from '../Event';
import {Entity} from '../../Entity/Entity';
import {EventManager} from './EventManager';

export class TransactionSavingEventManager extends EventManager { // decorator;

    public fireEvent(source: Entity, event: Event) {
        this.events.push(event);
        this.next(source, event);
    }

}
