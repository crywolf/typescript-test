import {Entity} from '../Entity/Entity';
import {Event} from '../Events/Event';

export abstract class ValueObjectCollection {

    constructor(private owningEntity: Entity) {
    }

    protected fireEvent(event: Event) {
        this.owningEntity.fireEvent(event);
    }

}
