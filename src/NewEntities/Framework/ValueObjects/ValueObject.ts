import {Entity} from '../Entity/Entity';

/**
 * Value object are not event-sourcable as they do not have "life cycle", they just "are".
 * Therefore, they can't also produce events, they have to delegate to the entity that owns them to inform
 * about the change to another value object
 */

export abstract class ValueObject {

    constructor(private owningEntity: Entity) {
    }

}
