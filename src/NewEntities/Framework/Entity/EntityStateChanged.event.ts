import {Event} from '../Events/Event';

export class EntityStateChangedEvent extends Event {

    constructor(public newStateName: string) {
        super();
    }

    public getData() {
        return {
            newStateName: this.newStateName
        };
    }

    public deserialize() {
        //
    }

}

Event.register(EntityStateChangedEvent);
