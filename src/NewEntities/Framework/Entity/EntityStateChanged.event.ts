import {Event} from "../Events/Event";


export class EntityStateChangedEvent extends Event {

    constructor(public newStateName: string) {
        super();
    }

    getData()  {
        return {
            newStateName: this.newStateName
        }
    }

    deserialize() {

    }

}

Event.register(EntityStateChangedEvent);